import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Para pegar o nome do usuário (ou outros dados) do cookie

const Header = () => {
  const navigate = useNavigate();
  
  // Pegando os dados do cliente a partir do cookie (supondo que você armazenou as informações do cliente junto com o token)
  const token = Cookies.get('token');
  const cliente = JSON.parse(localStorage.getItem('cliente')) || {}; // Verifica se os dados do cliente estão no localStorage

  const handleLogout = () => {
    // Realizar logout e limpar os dados
    Cookies.remove('token');
    localStorage.removeItem('cliente');
    navigate('/'); // Redireciona para a tela de login ou página inicial
  };

  return (
    <header>
      <div className="header-info">
        <span>Bem-vindo, {cliente.nome || 'Cliente'}</span> {/* Exibe o nome do cliente */}
        <span>{cliente.email}</span> {/* Exibe o email do cliente */}
      </div>
      <nav>
        <ul>
          <li><Link to="/cliente/dashboard">Início</Link></li>
          <li><Link to="/cliente/minhas-fichas">Minhas Fichas</Link></li>
          <li><Link to="/cliente/minhas-solicitacoes">Minhas Solicitações</Link></li>
          <li><Link to="/cliente/minha-conta">Minha Conta</Link></li>
          <li><button onClick={handleLogout}>Sair</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
