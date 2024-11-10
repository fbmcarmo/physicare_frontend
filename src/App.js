import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal/Portal';
import ClienteLogin from './pages/Cliente/ClienteLogin';
import ProfissionalLogin from './pages/Profissional/ProfissionalLogin';

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
      </Routes>
    </Router>
  );
}

export default App;