import api from './api';  // Instância de axios configurada
import { getClienteFromToken, getTokenFromCookie } from './authService'; // Supondo que você tenha uma função para obter o cliente a partir do token

// Solicitar apoio para um profissional
export const solicitarApoio = async (profissionalId) => {
  const clienteId = getClienteFromToken(); // Ou algum outro método para pegar o ID do cliente
  try {
    const response = await api.post('/solicitacoes/solicitar', { profissionalId });
    return response.data;
  } catch (error) {
    console.error('Erro ao solicitar apoio:', error);
    throw error;
  }
};

// Aceitar uma solicitação de apoio
export const aceitarSolicitacao = async (solicitacaoId) => {
  try {
    const response = await api.put(`/solicitacoes/aceitar/${solicitacaoId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao aceitar a solicitação:', error);
    throw error;
  }
};

// Rejeitar uma solicitação de apoio
export const rejeitarSolicitacao = async (solicitacaoId) => {
  try {
    const response = await api.put(`/solicitacoes/rejeitar/${solicitacaoId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao rejeitar a solicitação:', error);
    throw error;
  }
};

// Listar todas as solicitações
export const listarSolicitacoes = async () => {
  try {
    const response = await api.get('/solicitacoes');
    return response.data;
  } catch (error) {
    console.error('Erro ao listar solicitações:', error);
    throw error;
  }
};

// Listar solicitações específicas para um usuário (cliente ou profissional)
export const listarSolicitacoesPorUsuario = async (usuarioId) => {
  try {
    const token = getTokenFromCookie(); // Obtemos o token do cookie
    const response = await api.get(`/solicitacoes/usuario/${usuarioId}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Envia o token no cabeçalho
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao listar solicitações:', error);
    throw error;
  }
};

// Obter detalhes de uma solicitação específica por ID
export const obterSolicitacaoPorId = async (solicitacaoId) => {
  try {
    const response = await api.get(`/solicitacoes/${solicitacaoId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter a solicitação:', error);
    throw error;
  }
};

// Finalizar o contato de uma solicitação de apoio
export const finalizarContato = async (solicitacaoId) => {
  try {
    const response = await api.put(`/solicitacoes/finalizar/${solicitacaoId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao finalizar o contato:', error);
    throw error;
  }
};
