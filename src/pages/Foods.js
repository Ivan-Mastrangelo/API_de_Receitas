import React from 'react';
import FoodCards from '../components/FoodCards';
import FoodPageButtons from '../components/FoodPageButtons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Foods() {
  return (
    <>
      <Header
        icon1={ profileIcon }
        nameIcon1="profile-icon"
        iconId1="profile-top-btn"
        pageName="Foods"
        nameId="page-title"
        icon2={ searchIcon }
        nameIcon2="explore-icon"
        iconId2="search-top-btn"
      />
      <FoodPageButtons />
      <FoodCards />
      <Footer />
    </>
  );
}

export default Foods;
