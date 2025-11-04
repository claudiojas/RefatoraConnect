import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/axios';

export function Dashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // A query 'user' já foi feita pelo ProtectedRoute, podemos acessá-la aqui se necessário
  const { data: user } = useQuery({ queryKey: ['user'] });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return api.post('/auth/logout');
    },
    onSuccess: () => {
      // Limpa o cache do usuário e redireciona para o login
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
        <p className="text-gray-700 dark:text-gray-300">Status da conexão: <span className="font-bold text-red-500">Não Conectado</span></p>
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600"
          onClick={() => alert('Funcionalidade de conexão WhatsApp em breve!')}
        >
          Conectar WhatsApp
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