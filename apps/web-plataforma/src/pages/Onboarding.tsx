import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/axios';

// Supondo que você obtenha o clientId após o login (ex: de um contexto ou localStorage)
function getClientIdFromToken(): string | null {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.clientId;
  } catch (e) {
    return null;
  }
}

export function Onboarding() {
  const [history, setHistory] = useState('');
  const [services, setServices] = useState('');
  const [pricing, setPricing] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const clientId = getClientIdFromToken();

  const onboardingMutation = useMutation({
    mutationFn: async (configs: any) => {
      if (!clientId) throw new Error('Client ID não encontrado');

      // 1. Salva as configurações de cada agente em paralelo
      await Promise.all([
        api.post(`/client/${clientId}/config/history`, { companyHistory: configs.history, agentDescription: 'Responder sobre a história da empresa' }),
        api.post(`/client/${clientId}/config/services`, { servicesOffered: configs.services, agentDescription: 'Responder sobre os serviços oferecidos' }),
        api.post(`/client/${clientId}/config/pricing`, { paymentMethods: configs.pricing, agentDescription: 'Responder sobre preços', noPricingInfoText: 'Não forneça valores, apenas direcione para o orçamento.' }),
        api.post(`/client/${clientId}/config/contact`, { contactSuggestion: configs.contact, agentDescription: 'Ajudar o usuário a entrar em contato' }),
      ]);

      // 2. Marca o onboarding como completo
      await api.post(`/client/${clientId}/complete-onboarding`);
    },
    onSuccess: () => {
      // Invalida queries para buscar dados do usuário/cliente novamente
      queryClient.invalidateQueries({ queryKey: ['user'] });
      alert('Configuração salva com sucesso!');
      navigate('/dashboard');
    },
    onError: (error: any) => {
      alert('Erro ao salvar configurações: ' + (error.response?.data?.error || 'Tente novamente.'));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!history || !services || !pricing || !contact) {
      alert('Por favor, preencha todos os campos para continuar.');
      return;
    }
    onboardingMutation.mutate({ history, services, pricing, contact });
  };

  return (
    <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Configure seu Assistente</h1>
      <p className="text-center text-gray-600 dark:text-gray-400">Forneça as informações abaixo para que nossa IA possa responder em nome da sua empresa.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="history" className="block text-sm font-medium text-gray-700 dark:text-gray-300">História da Empresa</label>
          <textarea id="history" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={history} onChange={(e) => setHistory(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="services" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Serviços Oferecidos</label>
          <textarea id="services" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={services} onChange={(e) => setServices(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="pricing" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Informações de Preço e Pagamento</label>
          <textarea id="pricing" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={pricing} onChange={(e) => setPricing(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Informações de Contato</label>
          <textarea id="contact" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600" disabled={onboardingMutation.isPending}>
          {onboardingMutation.isPending ? 'Salvando...' : 'Salvar e ir para o Painel'}
        </button>
      </form>
    </div>
  );
}
