import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/axios';
import { useEffect, useState } from 'react';

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
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'Conectado' | 'Não Conectado'>('Não Conectado');

  const { data: user } = useQuery({ queryKey: ['user'] });

  // Carrega o SDK do Facebook dinamicamente
  useEffect(() => {
    if (document.getElementById('facebook-jssdk')) {
      setIsSdkLoaded(true);
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 'YOUR_META_APP_ID', // TODO: Substitua pelo seu App ID da Meta
        cookie: true,
        xfbml: true,
        version: 'v19.0',
      });
      setIsSdkLoaded(true);
    };

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

  }, []);

  const whatsappCallbackMutation = useMutation({
    mutationFn: async (code: string) => {
      return api.post('/auth/whatsapp/callback', {
        code,
        clientId: user.id,
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
    if (!isSdkLoaded || !window.FB) {
      alert('O SDK do Facebook ainda não foi carregado. Tente novamente em alguns segundos.');
      return;
    }

    window.FB.login(
      function (response: any) {
        if (response.authResponse && response.authResponse.code) {
          whatsappCallbackMutation.mutate(response.authResponse.code);
        } else {
          console.error('User cancelled login or did not fully authorize.');
          alert('A autorização do WhatsApp foi cancelada ou falhou.');
        }
      },
      {
        config_id: 'YOUR_CONFIG_ID', // TODO: Substitua pelo seu Config ID do fluxo de Embedded Signup
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
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600"
          onClick={handleWhatsAppConnect}
          disabled={!isSdkLoaded || whatsappCallbackMutation.isPending}
        >
          {whatsappCallbackMutation.isPending ? 'Conectando...' : 'Conectar WhatsApp'}
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