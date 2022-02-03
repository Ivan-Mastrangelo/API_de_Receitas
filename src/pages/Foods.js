import React from 'react';
import FoodCards from '../components/FoodCards';
import FoodPageButtons from '../components/FoodPageButtons';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Foods() {
  return (
    <>
      <Header pageName="Foods" />
      <FoodPageButtons />
      <FoodCards />
      <Footer />
    </>
  );
}

export default Foods;
