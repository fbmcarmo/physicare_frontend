// src/pages/Portal/Portal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginOptionButton from '../../components/LoginOptionButton';
import '../../styles/Portal.css';

const Portal = () => {
  const navigate = useNavigate();

  return (
    <div className="portal-container">
      <h1 className="portal-title">Bem-vindo ao Physicare</h1>
      <p className="portal-subtitle">Quem é você?</p>
      <div className="portal-buttons">
        <LoginOptionButton label="Cliente" onClick={() => navigate('/cliente/login')} />
        <LoginOptionButton label="Profissional" onClick={() => navigate('/profissional/login')} />
      </div>
    </div>
  );
};

export default Portal;
