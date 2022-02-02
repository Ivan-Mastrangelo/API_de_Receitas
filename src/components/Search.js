import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
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

  const { setAuxFood } = useContext(FoodContext);
  const { setAuxDrink } = useContext(DrinkContext);

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const getMealApi = async (element) => {
    const { search } = item;
    let recipes = [];
    if (search === 'ingredient') {
      recipes = await getMealByIngredient(element);
      setAuxFood({ recipe: recipes, target: '' });
    }
    if (search === 'name') {
      recipes = await getMealByName(element);
      setAuxFood({ recipe: recipes, target: '' });
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
      setAuxDrink({ recipe: recipes, target: '' });
    }
    if (search === 'name') {
      recipes = await getDrinkByName(element);
      setAuxDrink({ recipe: recipes, target: '' });
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
