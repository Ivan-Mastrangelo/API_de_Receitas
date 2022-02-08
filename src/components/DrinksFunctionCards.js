import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import { getDrinkById } from '../services/drinkAPI';
import DrinkContext from '../context/DrinkContext';
import FoodsRecommendation from './FoodsRecommendation';
import DrinksDetailsCards from './DrinksDetailsCards';
import FoodContext from '../context/FoodContext';

function DrinksFunctionCards({ id }) {
  const { ddetails, setDdetails, favorite, setFavorite } = useContext(DrinkContext);
  const { food: { meals } } = useContext(FoodContext);
  const [msg, setMsg] = useState(false);
  const [position, setPosition] = useState({ positionOne: 0, positionTwo: 1 });
  const history = useHistory();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getDrinkById(id);
      setDdetails(response.drinks);
    };
    fetchAPI();
  }, [setDdetails, id]);

  const setArrayIngredients = () => {
    if (ddetails.length > 0) {
      const quinze = 15;
      const array = ddetails[0];
      const arrayIngredientsAndMeasures = [];
      for (let i = 1; i <= quinze; i += 1) {
        if (ddetails[0][`strIngredient${i}`] !== null) {
          let str = `${ddetails[0][`strIngredient${i}`]}`;
          if (ddetails[0][`strMeasure${i}`] !== null) {
            str = `${array[`strIngredient${i}`]} - ${array[`strMeasure${i}`]}`;
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
      type: 'drink',
      nationality: '',
      category: ddetails[0].strCategory,
      alcoholicOrNot: ddetails[0].strAlcoholic,
      name: ddetails[0].strDrink,
      image: ddetails[0].strDrinkThumb,
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
    if (meals) {
      for (let i = 0; i <= five; i += 1) {
        recommendationArray.push(meals[i]);
      }
    }
    return recommendationArray;
  };

  const recommendation = setRecomendationArray();

  const changePosition = () => {
    const cards = recommendation.length - 1;
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
    <div>
      <DrinksDetailsCards
        drinksDetails={
          {
            msg,
            click: favoriteRecipe,
            share: shareLink,
            ingredients: ingredientsAndMeasures,
            ddetails,
            id }
        }
      />
      <FoodsRecommendation
        foodRecommend={ { recommendation, changePosition, position } }
      />
    </div>
  );
}

DrinksFunctionCards.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DrinksFunctionCards;
