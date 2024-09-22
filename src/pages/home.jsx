import React from 'react';
import Header from '../components/header/header';
import BodyCard from '../components/bodyCard/bodyCard';
import InfoOng from '../components/infoOng/infoOng';
import CatCard from '../components/Catcard/Catcard';
import Footer from '../components/footer/footer';
import Depoimento from '../components/depoimentoUser/depoiment';


function Home() {
  return (
    <div>
      <Header/>
      <BodyCard/>
      <InfoOng/>
      <CatCard/>
      <Depoimento/>
      <Footer/>
    </div>
  );
}

export default Home;