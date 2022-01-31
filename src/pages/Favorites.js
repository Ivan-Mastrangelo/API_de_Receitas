import React from 'react';
import Header from '../components/Header';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Favorites() {
  return (
    <Header
      icon1={ profileIcon }
      nameIcon1="profile-icon"
      iconId1="profile-top-btn"
      pageName="Favorite Recipes"
      nameId="page-title"
      icon2={ searchIcon }
      nameIcon2="explore-icon"
      iconId2="search-top-btn"
    />
  );
}

export default Favorites;
