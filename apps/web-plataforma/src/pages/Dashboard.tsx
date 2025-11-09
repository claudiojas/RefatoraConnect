import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/axios';
import { useEffect, useState } from 'react';

// Define a interface para o objeto User
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  clientId: string;
}

// Adiciona a tipagem para o objeto FB do SDK do Facebook
declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

export function Dashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isSdkInitialized, setIsSdkInitialized] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'Conectado' | 'Não Conectado'>('Não Conectado');

  const { data: user } = useQuery<User | undefined>({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const response = await api.get('/auth/me');
        return response.data;
      } catch (error) {
        // Se o /auth/me falhar (ex: token inválido), redireciona para o login
        navigate('/login');
        return undefined;
      }
    },
    retry: false, // Não tenta novamente se falhar
  });

  // Query para buscar a configuração da Meta a partir do nosso backend
  const { data: metaConfig, isLoading: isLoadingMetaConfig } = useQuery({
    queryKey: ['metaConfig'],
    queryFn: async () => {
      const response = await api.get('/auth/meta-config');
      return response.data;
    },
    enabled: !!user, // Só executa a query se o usuário estiver carregado
  });

  // Carrega e inicializa o SDK do Facebook dinamicamente
  useEffect(() => {
    if (!metaConfig?.appId) {
      return; // Não faz nada se não tivermos o appId
    }

    if (document.getElementById('facebook-jssdk') && window.FB) {
      setIsSdkInitialized(true);
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: metaConfig.appId,
        cookie: true,
        xfbml: true,
        version: 'v19.0',
      });
      setIsSdkInitialized(true);
    };

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

  }, [metaConfig]); // Depende da configuração da Meta ser carregada

  const whatsappCallbackMutation = useMutation({
    mutationFn: async ({ code, clientId }: { code: string; clientId: string }) => {
      return api.post('/auth/whatsapp/callback', {
        code,
        clientId,
      });
    },
    onSuccess: () => {
      setConnectionStatus('Conectado');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error('Erro ao conectar com o WhatsApp:', error);
      alert('Ocorreu um erro ao tentar conectar com o WhatsApp. Tente novamente.');
    }
  });

  const handleWhatsAppConnect = () => {
    if (!isSdkInitialized || !window.FB || !metaConfig?.configId) {
      alert('A configuração de conexão ainda não foi carregada. Tente novamente em alguns segundos.');
      return;
    }
    if (!user?.id) {
      alert('Dados do usuário não carregados. Por favor, tente fazer login novamente.');
      return;
    }

    window.FB.login(
      function (response: any) {
                  if (response.authResponse && response.authResponse.code) {
                    whatsappCallbackMutation.mutate({ code: response.authResponse.code, clientId: user.id });
                  } else {          console.error('User cancelled login or did not fully authorize.');
          alert('A autorização do WhatsApp foi cancelada ou falhou.');
        }
      },
      {
        config_id: metaConfig.configId,
        response_type: 'code',
        override_default_response_type: true,
        scope: 'whatsapp_business_management,whatsapp_business_messaging',
      }
    );
  };

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return api.post('/auth/logout');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      navigate('/login');
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const isConnectButtonDisabled = !isSdkInitialized || whatsappCallbackMutation.isPending || isLoadingMetaConfig;

  return (
    <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Bem-vindo, {user?.name}!</h1>
      <p className="text-center text-gray-700 dark:text-gray-300">Este é o seu painel de controle.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Integração WhatsApp</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Status da conexão: 
          <span className={`font-bold ${connectionStatus === 'Conectado' ? 'text-green-500' : 'text-red-500'}`}>
            {connectionStatus}
          </span>
        </p>
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600 disabled:bg-gray-400"
          onClick={handleWhatsAppConnect}
          disabled={isConnectButtonDisabled}
        >
          {isLoadingMetaConfig ? 'Carregando configuração...' : (whatsappCallbackMutation.isPending ? 'Conectando...' : 'Conectar WhatsApp')}
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600"
        disabled={logoutMutation.isPending}
      >
        {logoutMutation.isPending ? 'Saindo...' : 'Sair'}
      </button>
    </div>
  );
}