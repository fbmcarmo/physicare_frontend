import React, { useState, useEffect } from 'react';
import { fetchClienteData } from '../../services/authService';
import '../../styles/ClienteDashboard.css';
import ClienteLayout from '../../components/ClienteLayout';

const ClienteDashboard = () => {
  const [clienteData, setClienteData] = useState(null);

  useEffect(() => {
    const loadClienteData = async () => {
      try {
        const data = await fetchClienteData();
        setClienteData(data);
      } catch (error) {
        console.error('Erro ao carregar dados do cliente:', error);
      }
    };
    loadClienteData();
  }, []);

  return (
    <ClienteLayout>
      <h2>Bem-vindo ao seu painel</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </ClienteLayout>
  );
};

export default ClienteDashboard;
