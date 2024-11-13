import React, { useState, useEffect } from 'react';
import { listarSolicitacoesPorUsuario } from '../../services/solicitacaoService'; // Importando o serviço para listar as solicitações
import { fetchClienteData } from '../../services/authService'; // Função para pegar os dados do cliente
import { useNavigate } from 'react-router-dom'; // Para navegação
import '../../styles/ClienteMinhasSolicitacoes.css';
import ClienteLayout from '../../components/ClienteLayout';

const ClienteMinhasSolicitacoes = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usuarioId, setUsuarioId] = useState(null); // Estado para armazenar o ID do usuário

  const navigate = useNavigate(); // Usado para navegação programática

  useEffect(() => {
    const carregarDados = async () => {
      try {
        // Primeiro, carregamos os dados do cliente (incluindo o id)
        console.log('Carregando dados do cliente...');
        const clienteData = await fetchClienteData();
        console.log('Dados do cliente carregados:', clienteData);
        setUsuarioId(clienteData._id); // Armazena o id do cliente
  
        // Verifica se o id do cliente está presente
        if (!clienteData._id) {
          setError('ID do cliente não encontrado.');
          setLoading(false);
          return;
        }
  
        // Depois que o id do cliente for obtido, carregamos as solicitações
        console.log('Carregando solicitações para o usuário:', clienteData._id);
        const solicitacoesData = await listarSolicitacoesPorUsuario(clienteData._id);
        console.log('Solicitações carregadas:', solicitacoesData);
        setSolicitacoes(solicitacoesData); // Armazena as solicitações
      } catch (error) {
        console.error('Erro ao carregar solicitações:', error);
        setError('Erro ao carregar solicitações');
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };
  
    carregarDados(); // Chama a função ao carregar o componente
  }, []); // Só executa uma vez, ao montar o componente
  

  const handleClickSolicitacao = (solicitacaoId) => {
    // Navegar para a página de detalhes da solicitação
    navigate(`/cliente/solicitacao/${solicitacaoId}`);
  };

  return (
    <ClienteLayout>
      <div className="minhas-solicitacoes-container">
        <h2>Minhas Solicitações</h2>
        {loading ? (
          <p>Carregando solicitações...</p> // Exibe mensagem enquanto carrega
        ) : error ? (
          <p>{error}</p> // Exibe mensagem de erro caso falhe
        ) : solicitacoes.length === 0 ? (
          <p>Você ainda não tem solicitações.</p> // Exibe mensagem caso não haja solicitações
        ) : (
          <div className="solicitacoes-list">
            {solicitacoes.map((solicitacao) => (
              <div
                key={solicitacao._id}
                className="solicitacao-card"
                onClick={() => handleClickSolicitacao(solicitacao._id)} // Ao clicar, navega para o detalhe
              >
                <h3>Solicitação {solicitacao.status}</h3>
                <p>Profissional: {solicitacao.profissionalId}</p>
                <p>Status: {solicitacao.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ClienteLayout>
  );
};

export default ClienteMinhasSolicitacoes;