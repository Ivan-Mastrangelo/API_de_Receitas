import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import { getMealById } from '../services/foodAPI';
import FoodContext from '../context/FoodContext';
import DrinkContext from '../context/DrinkContext';
import FoodDetailsCards from './FoodDetailsCards';
import DrinksRecommendation from './DrinksRecommendation';

function FoodFunctionCard({ id }) {
  const { details, setDetails, favorite, setFavorite } = useContext(FoodContext);
  const { drink: { drinks } } = useContext(DrinkContext);
  const history = useHistory();
  const [msg, setMsg] = useState(false);
  const [position, setPosition] = useState({ positionOne: 0, positionTwo: 1 });

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getMealById(id);
      setDetails(response.meals);
    };
    fetchAPI();
  }, [setDetails, id]);

  const setArrayIngredients = () => {
    if (details.length > 0) {
      const vinte = 20;
      const arrayIngredientsAndMeasures = [];
      for (let i = 1; i <= vinte; i += 1) {
        if (details[0][`strIngredient${i}`] !== '') {
          let str = `${details[0][`strIngredient${i}`]}`;
          if (details[0][`strMeasure${i}`] !== '') {
            str = `${details[0][`strIngredient${i}`]} - ${details[0][`strMeasure${i}`]}`;
          }
          arrayIngredientsAndMeasures.push(str);
        }
      }
      return arrayIngredientsAndMeasures;
    }
  };

  const ingredientsAndMeasures = setArrayIngredients();

  const shareLink = () => {
    const TIME = 2000;
    const { pathname } = history.location;
    const url = `http://localhost:3000${pathname}`;
    clipboardCopy(url);
    setMsg(true);
    setTimeout(() => setMsg(false), TIME);
  };

  const removeFavorite = () => {
    let favoriteRecipes = [...favorite];
    favoriteRecipes = favorite.filter((recipe) => recipe.id !== id);
    const setRecipes = JSON.stringify(favoriteRecipes);
    localStorage.setItem('favoriteRecipes', setRecipes);
    setFavorite(favoriteRecipes);
  };

  const favoriteRecipe = () => {
    const saveRecipes = {
      id,
      type: 'food',
      nationality: details[0].strArea,
      category: details[0].strCategory,
      alcoholicOrNot: '',
      name: details[0].strMeal,
      image: details[0].strMealThumb,
    };
    let favoriteRecipes = [];
    if (favorite && favorite.every((recipe) => recipe.id !== id)) {
      favoriteRecipes = [...favorite];
      favoriteRecipes.push(saveRecipes);
      const setRecipes = JSON.stringify(favoriteRecipes);
      localStorage.setItem('favoriteRecipes', setRecipes);
      setFavorite(favoriteRecipes);
    } else if (!favorite) {
      favoriteRecipes = [saveRecipes];
      const setRecipes = JSON.stringify(favoriteRecipes);
      localStorage.setItem('favoriteRecipes', setRecipes);
      setFavorite(favoriteRecipes);
    } else {
      removeFavorite();
    }
  };

  const setRecomendationArray = () => {
    const recommendationArray = [];
    const five = 5;
    if (drinks) {
      for (let i = 0; i <= five; i += 1) {
        recommendationArray.push(drinks[i]);
      }
    }
    return recommendationArray;
  };

  const recomendation = setRecomendationArray();

  const changePosition = () => {
    const cards = recomendation.length - 1;
    if (position.positionTwo < cards) {
      setPosition({
        positionOne: position.positionOne + 2,
        positionTwo: position.positionTwo + 2,
      });
    } else {
      setPosition({
        positionOne: 0,
        positionTwo: 1,
      });
    }
  };

  return (
    <section>
      <FoodDetailsCards
        foodDetails={
          {
            click: favoriteRecipe,
            share: shareLink,
            ingredients: ingredientsAndMeasures,
            msg,
            details,
            id }
        }
      />
      <DrinksRecommendation
        drinksRecommend={ {
          recomendation, changePosition, position,
        } }
      />
    </section>
  );
}

export default FoodFunctionCard;

FoodFunctionCard.propTypes = {
  id: PropTypes.string.isRequired,
};

// ReactPlayer retirado do site https://www.npmjs.com/package/react-player.
