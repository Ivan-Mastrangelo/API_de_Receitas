import React from 'react';
import Header from '../components/Header';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function ExploreDrinks() {
  return (
    <Header
      icon1={ profileIcon }
      nameIcon1="profile-icon"
      iconId1="profile-top-btn"
      pageName="Explore Drinks"
      nameId="page-title"
      icon2={ searchIcon }
      nameIcon2="explore-icon"
      iconId2="search-top-btn"
    />
  );
}
