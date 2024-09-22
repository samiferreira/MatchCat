import React from 'react';
import Foto from '../../image/gato.png';
import './infoOng.css';

const InfoOng = () => {
    return (
        <div className="info-ong-container">
            <div className="info-ong-text">
                <h1>Sobre o MatchCat</h1>
                <p>O principal objetivo da MatchCat é sensibilizar a sociedade sobre a adoção e posse responsável de gatinhos que vivem com FIV e FeLV. Por meio de ações efetivas como palestras, eventos e conscientização online, buscamos desmistificar o FIV e o FeLV, mostrando que gatos portadores podem ter uma vida longa e feliz com os cuidados adequados.</p>
            </div>
            <div className="info-ong-image">
                <img src= {Foto} alt="gato" />
            </div>
        </div>
    );
};

export default InfoOng;