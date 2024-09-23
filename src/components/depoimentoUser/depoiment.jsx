import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './depoiment.css';

function Depoimento() {
  const [users, setUsers] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const apiPrefix = 'https://fiv-felv-cats.onrender.com';

  
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${apiPrefix}/user`);
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados dos usuários:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [apiPrefix]); 

  const nextDepoimento = () => {
    setCurrentIndex((currentIndex + 1) % users.length);
  };

  const prevDepoimento = () => {
    setCurrentIndex((currentIndex - 1 + users.length) % users.length);
  };

  return (
    <div className="depoimentos">
      <h2>Depoimentos</h2>

      {users && users.length > 0 ? (
        <div className="depoimento-container">
          <div className="depoimento">
            <p>{users[currentIndex].depoiment}</p>
            <span>- {users[currentIndex].userName}</span>
          </div>

          <div className="controles">
            <button className='botaoAnterior' onClick={prevDepoimento}>Anterior</button>
            <button className='botaoProximo' onClick={nextDepoimento}>Próximo</button>
          </div>
        </div>
      ) : (
        <p>Carregando depoimentos...</p>
      )}
    </div>
  );
}

export default Depoimento;
