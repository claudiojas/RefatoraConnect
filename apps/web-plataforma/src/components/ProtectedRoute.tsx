import { useQuery } from '@tanstack/react-query';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { api } from '../lib/axios';

// Função para buscar os dados do usuário
const fetchUser = async () => {
  const { data } = await api.get('/auth/me');
  return data;
};

export function ProtectedRoute() {
  const location = useLocation();
  const { data: user, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    retry: false, // Não tenta novamente em caso de erro 401
  });

  if (isLoading) {
    return <div>Carregando...</div>; // Ou um componente de spinner
  }

  if (isError) {
    // Se a API retornar um erro (ex: 401), o usuário não está autenticado
    return <Navigate to="/login" replace />;
  }

  // Se o onboarding não foi completo e o usuário não está na página de onboarding, redireciona para lá
  if (user && !user.client.onboardingCompleted && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  // Se o onboarding foi completo e o usuário tenta acessar a página de onboarding, redireciona para o dashboard
  if (user && user.client.onboardingCompleted && location.pathname === '/onboarding') {
    return <Navigate to="/dashboard" replace />;
  }

  // Se tudo estiver certo, renderiza a página solicitada
  return <Outlet />;
}
