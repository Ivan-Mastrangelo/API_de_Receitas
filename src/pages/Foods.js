import React, { useContext } from 'react';
import Header from '../components/Header';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import DrinkContext from '../context/DrinkContext';
import FoodContext from '../context/FoodContext';

function Foods() {
  const { food, setFood } = useContext(FoodContext);
  const { drink, setDrink } = useContext(DrinkContext);

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
      <div>
        comidas
      </div>
      <div>
        bebidas
      </div>
    </>
  );
}

export default Foods;
