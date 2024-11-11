import api from './api';
import Cookies from 'js-cookie'; 

// Função para realizar o login
export const clienteLogin = async (email, password) => {
  try {

    const response = await api.post('/clientes/login', 
      { email, senha: password },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Se houver um token, armazena no cookie
    const { token } = response.data;
    if (token) {
      Cookies.set('token', token, { expires: 7, path: '/' });
    }

    return response.data; // Retorna os dados recebidos da resposta
  } catch (error) {
    // Tratamento de erro adequado
    const errorMessage = error.response?.data?.error || "Erro ao fazer login";
    throw new Error(errorMessage);
  }
};

// Função para realizar o logout
export const logout = () => {
  // Remove o token do cookie
  Cookies.remove('token', { path: '/' });
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  const token = Cookies.get('token'); // Obtém o token do cookie
  return token !== undefined; // Retorna true se o token estiver presente
};
