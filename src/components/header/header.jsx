import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './header.css';
import logo from '../../image/pet.png';

function Header() {
  const [ong, setOng] = useState({});
  const apiPrefix = 'http://localhost:4000';

  
  const fetchOngInfo = async () => {
    try {
      const response = await axios.get(`${apiPrefix}/ong`);
      setOng(response.data.ongInfo);
    } catch (error) {
      console.error("Erro ao buscar dados da ONG:", error);
    }
  };

  useEffect(() => {
    fetchOngInfo();
  }, [apiPrefix]); 

  return (
    <header className="header">
      <div className="container">
        <div className="logo-name">
          <img src={logo} alt="Logo da ONG" />
          <h2>{ong.name}</h2> 
        </div>
        <nav className="menu">
          <a href="/">Início</a>
          <a href="/adocao">Adoção</a>
          <a href="/Sobre nós">Sobre nós</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
