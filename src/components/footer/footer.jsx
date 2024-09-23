import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
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
    <footer className="footer">
      <div className="container">
        <div className="ong-info">
          <h2>{ong.name}</h2>
          <p>Endereço: {ong.adress}</p> 
          <p>Telefone: {ong.phone}</p>
          <p>Email: {ong.email}</p>
        </div>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> 
          </a>
          <a href="https://www.linkedin.com/in/samira-ferreira-887a081a0/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
