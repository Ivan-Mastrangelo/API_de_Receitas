import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import { getMealById } from '../services/foodAPI';
import FoodContext from '../context/FoodContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FoodInProgress({ id }) {
  const {
    recipeprogress,
    setRecipeProgress,
    favorite,
    setFavorite,
  } = useContext(FoodContext);
  const [favRecipe, setFavRecipe] = useState(false);
  const [msg, setMsg] = useState(false);
  const history = useHistory();
  console.log(recipeprogress);

  useEffect(() => {
    const verifyFavorites = () => {
      if (favorite) {
        setFavRecipe(favorite.length > 0 && favorite
          .some((isFavorite) => isFavorite.id === id));
      }
    };
    const fetchAPI = async () => {
      const response = await getMealById(id);
      setRecipeProgress(response.meals);
    };
    fetchAPI();
    verifyFavorites();
  }, [setRecipeProgress, id, favorite]);

  const setArrayIngredients = () => {
    if (recipeprogress.length > 0) {
      const vinte = 20;
      const array = recipeprogress[0];
      const arrayIngredientsAndMeasures = [];
      for (let i = 1; i <= vinte; i += 1) {
        if (array[`strIngredient${i}`] !== ''
        && array[`strIngredient${i}`] !== null) {
          let str = `${array[`strIngredient${i}`]}`;
          if (array[`strMeasure${i}`] !== '') {
            str = `${array[`strIngredient${i}`]} - ${array[`strMeasure${i}`]}`;
          }
          arrayIngredientsAndMeasures.push(str);
        }
      }
      return arrayIngredientsAndMeasures;
    }
  };

  const ingredients = setArrayIngredients();

  const handleCheck = (e) => {
    const teste = document.getElementById(e.target.value).nextSibling;
    teste.classList.toggle('checked');
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
      nationality: recipeprogress[0].strArea,
      category: recipeprogress[0].strCategory,
      alcoholicOrNot: '',
      name: recipeprogress[0].strMeal,
      image: recipeprogress[0].strMealThumb,
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

  const shareLink = () => {
    const TIME = 2000;
    const { pathname } = history.location;
    const newPathName = pathname.split('/');
    console.log(newPathName);
    const url = `http://localhost:3000/${newPathName[1]}/${newPathName[2]}`;
    clipboardCopy(url);
    setMsg(true);
    setTimeout(() => setMsg(false), TIME);
  };

  return (
    <div>
      {
        recipeprogress && recipeprogress.map(({
          strMealThumb,
          idMeal,
          strMeal,
          strCategory,
          strInstructions,
        }) => (
          <div key={ idMeal }>
            <img
              src={ strMealThumb }
              alt={ `Receita do(a) ${strMeal}` }
              data-testid="recipe-photo"
              width="100%"
            />
            <h3 data-testid="recipe-title">
              { strMeal }
            </h3>
            {msg && <p>Link copied!</p>}
            <button
              type="button"
              data-testid="share-btn"
              onClick={ () => shareLink() }
            >
              <img src={ shareIcon } alt="share-icon" />
            </button>
            <button
              onClick={ () => favoriteRecipe() }
              type="button"
            >
              <img
                data-testid="favorite-btn"
                src={ favRecipe ? blackHeartIcon : whiteHeartIcon }
                alt="share-icon"
              />
            </button>
            <p data-testid="recipe-category">
              Categoria:
              {' '}
              {strCategory}
            </p>
            <div>
              Ingredients:
              { ingredients.map(
                (ingredient, index, array) => (
                  <section key={ index }>
                    <label
                      htmlFor={ ingredient }
                      data-testid={ `${array.length}-ingredient-step` }
                    >
                      <input
                        type="checkbox"
                        id={ ingredient }
                        value={ ingredient }
                        onChange={ (e) => handleCheck(e) }
                      />
                      <span>{ingredient}</span>
                    </label>
                  </section>
                ),
              )}
            </div>
            <p data-testid="instructions">
              Instructions:
              {'  '}
              {strInstructions}
            </p>
          </div>
        ))
      }
      <button type="button" data-testid="finish-recipe-btn">
        Complete recipe
      </button>
    </div>
  );
}

FoodInProgress.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FoodInProgress;
