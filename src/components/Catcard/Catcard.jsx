import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './catcard.css';
import Modal from '../modal/modal';

const CatCard = () => {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  const fetchCats = async () => {
    try {
      const response = await axios.get('https://fiv-felv-cats.onrender.com/cat');
      setCats(response.data.cat);
    } catch (error) {
      console.error('Erro ao buscar gatos:', error);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []); 

  const handleAdoptClick = (cat) => {
    setSelectedCat(cat);
  };

  const handleCloseModal = () => {
    setSelectedCat(null);
  };

  const handleCatAdoption = (catId) => {
    setCats(cats.filter(cat => cat.id !== catId));
  };

  return (
    <div>
      <h1 className='titulo'>Adote um resgatinho!</h1>
      <div className="cards-container">
        {cats.map((cat) => (
          <div key={cat.id} className="card">
            <img src={cat.imageUrl} alt={`Foto de ${cat.name}`} className="cat-image" />
            <h2>{cat.name}</h2>
            <p>Idade: {cat.age} ano(s)</p>
            <p>FIV: {cat.fiv ? 'Sim' : 'Não'}</p>
            <p>FELV: {cat.felv ? 'Sim' : 'Não'}</p>
            <button className='botaoAdotar' onClick={() => handleAdoptClick(cat)}>
              <p>Disponível para adoção</p>
            </button>
          </div>
        ))}
      </div>
      {selectedCat && (
        <Modal 
          cat={selectedCat} 
          onClose={handleCloseModal} 
          onAdopt={handleCatAdoption} 
        />
      )}
    </div>
  );
};

export default CatCard;
