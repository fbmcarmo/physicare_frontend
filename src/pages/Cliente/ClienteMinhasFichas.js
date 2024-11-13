import React, { useState, useEffect } from 'react';
import { fetchMinhasFichasCliente } from '../../services/fichaService';
import FichaCard from '../../components/FichaCard';
import '../../styles/MinhasFichas.css';
import ClienteLayout from '../../components/ClienteLayout';

const ClienteMinhasFichas = () => {
  const [fichas, setFichas] = useState([]);
  const clienteId = ""; // ou obtido do token do cliente

  useEffect(() => {
    const loadFichas = async () => {
      try {
        const data = await fetchMinhasFichasCliente(clienteId);
        setFichas(data);
      } catch (error) {
        console.error('Erro ao carregar fichas:', error);
      }
    };
    loadFichas();
  }, [clienteId]);

  return (
    <ClienteLayout>
      <div className="minhas-fichas-container">
      <h2>Minhas Fichas</h2>
      <div className="fichas-list">
        {fichas.length > 0 ? (
          fichas.map((ficha) => <FichaCard key={ficha._id} ficha={ficha} />)
        ) : (
          <p>Carregando fichas...</p>
        )}
      </div>
    </div>
    </ClienteLayout>
    
  );
};

export default ClienteMinhasFichas;
