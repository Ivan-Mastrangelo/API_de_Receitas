import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import { getDrinkById } from '../services/drinkAPI';
import DrinkContext from '../context/DrinkContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DrinkRecipeProgress({ id }) {
  const {
    recipeProgress,
    setRecipeProgress,
    favorite,
    setFavorite,
  } = useContext(DrinkContext);
  const [favRecipe, setFavRecipe] = useState(false);
  const [msg, setMsg] = useState(false);
  const [first, setFirst] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const verifyFavorites = () => {
      if (favorite) {
        setFavRecipe(favorite.length > 0 && favorite
          .some((isFavorite) => isFavorite.id === id));
      }
    };
    const fetchAPI = async () => {
      const response = await getDrinkById(id);
      setRecipeProgress(response.drinks);
    };
    fetchAPI();
    verifyFavorites();
  }, [setRecipeProgress, id, favorite]);

  const setArrayIngredients = () => {
    if (recipeProgress.length > 0) {
      const quinze = 15;
      const array = recipeProgress[0];
      const arrayIngredientsAndMeasures = [];
      for (let i = 1; i <= quinze; i += 1) {
        if (array[`strIngredient${i}`] !== ''
          && array[`strIngredient${i}`] !== null) {
          let str = `${array[`strIngredient${i}`]}`;
          if (array[`strMeasure${i}`] !== ''
          && array[`strIngredient${i}`] !== null) {
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
    e.target.parentNode.classList.toggle('checked');
    let riskIgredient = [];
    if (first.length === 0) {
      riskIgredient.push(e.target.value);
      setFirst(riskIgredient);
    } else if (first.length > 0 && first.every((el) => el !== e.target.value)) {
      riskIgredient = [...first];
      riskIgredient.push(e.target.value);
      setFirst(riskIgredient);
    } else {
      const unChecked = first.filter((el) => el !== e.target.value);
      setFirst(unChecked);
    }
    if (first.length + 1 !== ingredients.length) {
      setIsDisable(true);
      console.log(first.length);
    } else {
      setIsDisable(false);
      console.log(ingredients.length);
    }
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
      category: recipeProgress[0].strCategory,
      alcoholicOrNot: recipeProgress[0].strAlcoholic,
      name: recipeProgress[0].strDrink,
      image: recipeProgress[0].strDrinkThumb,
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
        recipeProgress && recipeProgress.map(({
          strDrinkThumb,
          idDrink,
          strDrink,
          strCategory,
          strInstructions,
          strAlcoholic,
        }) => (
          <div key={ idDrink }>
            <img
              src={ strDrinkThumb }
              alt={ `Receita do(a) ${strDrink}` }
              data-testid="recipe-photo"
              width="100%"
            />
            <h3 data-testid="recipe-title">
              { strDrink }
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
              { `Categoria: ${strCategory}, ${strAlcoholic}` }
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
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ isDisable }
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </div>
  );
}

DrinkRecipeProgress.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DrinkRecipeProgress;
