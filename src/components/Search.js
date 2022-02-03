import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FoodContext from '../context/FoodContext';
import DrinkContext from '../context/DrinkContext';
import {
  getDrinkByIngredient,
  getDrinkByLetter,
  getDrinkByName,
} from '../services/drinkAPI';
import { getMealByIngredient, getMealByLetter, getMealByName } from '../services/foodAPI';
import SearchBar from './SearchBar';

export default function Search({ pageName }) {
  const [item, setItem] = useState({
    search: '',
    value: '',
  });

  const { setAuxFood, food } = useContext(FoodContext);
  const { setAuxDrink, drink } = useContext(DrinkContext);

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const HISTORY = useHistory();

  const setRedirect = (value, recipes) => {
    console.log(HISTORY);
    if (value === 1 && recipes.meals) {
      const path = `/foods/${recipes.meals[0].idMeal}`;
      HISTORY.push(path);
    }
    if (value === 1 && recipes.drinks) {
      const path = `/drinks/${recipes.drinks[0].idDrink}`;
      HISTORY.push(path);
    }
  };

  const verifyResponse = (recipes) => {
    if (recipes.drinks) {
      setRedirect(recipes.drinks.length, recipes);
    }
    if (recipes.meals) {
      setRedirect(recipes.meals.length, recipes);
    }
    if (recipes === undefined || recipes.meals === null || recipes.drinks === null) {
      setAuxDrink({ recipe: drink, target: '' });
      setAuxFood({ recipe: food, target: '' });
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else {
      setAuxDrink({ recipe: recipes, target: '' });
      setAuxFood({ recipe: recipes, target: '' });
    }
  };

  const getMealApi = async (element) => {
    const { search } = item;
    let recipes = [];
    if (search === 'ingredient') {
      recipes = await getMealByIngredient(element);
      verifyResponse(recipes);
    }
    if (search === 'name') {
      recipes = await getMealByName(element);
      verifyResponse(recipes);
    }
    if (search === 'letter') {
      recipes = element.length === 1
        ? setAuxFood({ recipe: await getMealByLetter(element), target: '' })
        : global.alert('Your search must have only 1 (one) character');
    }
  };

  const getDrinkApi = async (element) => {
    const { search } = item;
    let recipes = [];
    if (search === 'ingredient') {
      recipes = await getDrinkByIngredient(element);
      verifyResponse(recipes);
    }
    if (search === 'name') {
      recipes = await getDrinkByName(element);
      verifyResponse(recipes);
    }
    if (search === 'letter') {
      recipes = element.length === 1
        ? setAuxDrink({ recipe: await getDrinkByLetter(element), target: '' })
        : global.alert('Your search must have only 1 (one) character');
    }
  };

  const getApi = () => {
    const { value } = item;
    if (pageName === 'Foods') {
      getMealApi(value);
    }
    if (pageName === 'Drinks') {
      getDrinkApi(value);
    }
  };

  return (
    <SearchBar
      change={ handleChange }
      click={ getApi }
    />
  );
}

Search.propTypes = {
  pageName: PropTypes.string.isRequired,
};
