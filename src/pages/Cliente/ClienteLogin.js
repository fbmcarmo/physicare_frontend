import React, { useState } from 'react';
import InputField from '../../components/InputField';
import LoginButton from '../../components/LoginButton';
import { clienteLogin } from '../../services/authService'; 
import { Link, useNavigate } from 'react-router-dom';  // Importando o useNavigate
import "../../styles/ClienteLogin.css"; 

const ClienteLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();  // Hook de navegação

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Tentando realizar o login
      const userData = await clienteLogin(email, senha);
      console.log('Usuário logado:', userData);

      // Redirecionar o usuário após login bem-sucedido
      navigate('/cliente/dashboard');  // Altere para a rota que você deseja redirecionar
    } catch (error) {
      alert("Erro no login. Tente novamente")
      console.error("Erro no login:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          id="password"
          label="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <LoginButton type="submit">Entrar</LoginButton>
      </form>
      
      <p className="register-link">
        Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>
      </p>
    </div>
  );
};

export default ClienteLogin;
