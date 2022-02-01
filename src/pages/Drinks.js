import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import DrinkCards from '../components/DrinkCards';
import DrinkPageButtons from '../components/DrinkPageButtons';

function Drinks() {
  return (
    <>
      <Header
        icon1={ profileIcon }
        nameIcon1="profile-icon"
        iconId1="profile-top-btn"
        pageName="Drinks"
        nameId="page-title"
        icon2={ searchIcon }
        nameIcon2="explore-icon"
        iconId2="search-top-btn"
      />
      <DrinkPageButtons />
      <DrinkCards />
      <Footer />
    </>
  );
}

export default Drinks;
