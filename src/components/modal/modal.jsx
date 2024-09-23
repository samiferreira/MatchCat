import React from 'react';
import './modal.css';

const Modal = ({ cat, onClose, onAdopt }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
    onAdopt(cat.id); 
  };
  
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Adote o gato {cat.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Seu nome:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Seu email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Seu telefone:</label>
            <input type="tel" id="telefone" required />
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Seu endereço:</label>
            <input type="text" id="endereco" required />
          </div>
          <button type="submit">Enviar pedido de adoção</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;