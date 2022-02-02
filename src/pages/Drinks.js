import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinkCards from '../components/DrinkCards';
import DrinkPageButtons from '../components/DrinkPageButtons';

function Drinks() {
  return (
    <>
      <Header pageName="Drinks" />
      <DrinkPageButtons />
      <DrinkCards />
      <Footer />
    </>
  );
}

export default Drinks;
