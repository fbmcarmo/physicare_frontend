import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal/Portal';
import ClienteLogin from './pages/Cliente/ClienteLogin';
import ProfissionalLogin from './pages/Profissional/ProfissionalLogin';
import ClienteDashboard from './pages/Cliente/ClienteDashboard';
import MinhasFichas from './pages/Cliente/ClienteMinhasFichas';
import ClienteMinhasSolicitacoes from './pages/Cliente/ClienteMinhasSolicitações';

function App() {
  return (
    <Router>
      <Routes>
        {/* Tela inicial onde o usuário escolhe o tipo de login */}
        <Route path="/" element={<Portal />} />
        
        {/* Rota de login para o cliente */}
        <Route path="/cliente/login" element={<ClienteLogin />} />
        
        {/* Rota de login para o profissional */}
        <Route path="/profissional/login" element={<ProfissionalLogin />} />

        <Route path="/cliente/dashboard" element={<ClienteDashboard />} />

        <Route path="/cliente/fichas" element={<MinhasFichas />} />

        <Route path="/cliente/solicitacoes/" element={<ClienteMinhasSolicitacoes/>} />

      </Routes>
    </Router>
  );
}

export default App;