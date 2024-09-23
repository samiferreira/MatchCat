import React from 'react';
import './bodyCard.css'
import Gato from '../../image/gatinho.png'; 

function Body() {

  return (
    <section className="bodyCard">
      <div className="body-card"> 
        <h1>Não compre, <span>adote.</span></h1>
        <h2>faça um <span>ronronar</span> feliz <br/> a felicidade tem cara de bigode.</h2>
      </div>
      <div className="gatinho-image"> 
        <img src={Gato} alt="Gatinho" />
      </div>
    </section>
  );
}

export default Body;