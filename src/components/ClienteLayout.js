import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ClienteLayout.css';

const ClienteLayout = ({ children }) => {
  return (
    <div className="cliente-layout">
      <header className="dashboard-header">
        <nav>
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/cliente/fichas" className="nav-link">Minhas Fichas</Link>
          <Link to="/cliente/solicitacoes" className="nav-link">Minhas Solicitações</Link>
          <Link to="/cliente/conta" className="nav-link">Minha Conta</Link>
        </nav>
      </header>
      <main className="content-container">{children}</main>
    </div>
  );
};

export default ClienteLayout;
