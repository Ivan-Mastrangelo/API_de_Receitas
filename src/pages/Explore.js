import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Explore() {
  const history = useHistory();
  return (
    <>
      <Header
        icon1={ profileIcon }
        nameIcon1="profile-icon"
        iconId1="profile-top-btn"
        pageName="Explore"
        nameId="page-title"
        icon2={ searchIcon }
        nameIcon2="explore-icon"
        iconId2="search-top-btn"
      />
      <button
        type="button"
        data-testid="explore-foods"
        onClick={ () => history.push('/explore/foods') }
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>
      <Footer />
    </>
  );
}

export default Explore;
