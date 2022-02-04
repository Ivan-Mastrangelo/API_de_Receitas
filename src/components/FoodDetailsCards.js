import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { getMealById } from '../services/foodAPI';
import FoodContext from '../context/FoodContext';

function FoodDetailsCards({ state }) {
  const { details, setDetails } = useContext(FoodContext);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getMealById(state);
      setDetails(response.meals);
    };
    fetchAPI();
  }, [setDetails, state]);
  console.log(details);

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

  return (
    <div>
      {
        details && details.map(({
          strMealThumb,
          idMeal,
          strMeal,
          strCategory,
          strInstructions,
          strYoutube,
        }) => (
          <div key={ idMeal }>
            <img
              src={ strMealThumb }
              alt={ `Receita do(a) ${strMeal}` }
              data-testid="recipe-photo"
              width="15%"
            />
            <h3 data-testid="recipe-title">
              { strMeal }
            </h3>
            <button type="button" data-testid="share-btn">share</button>
            <button type="button" data-testid="favorite-btn">Favorite</button>
            <p data-testid="recipe-category">
              Categoria:
              {' '}
              {strCategory}
            </p>
            <ul>
              Ingredients:
              { ingredientsAndMeasures.map(
                (ingredient, index) => (
                  <li
                    data-testid={ `${index}-ingredient-name-and-measure` }
                    key={ `${index}-ingredient-name-and-measure` }
                  >
                    { ingredient }
                  </li>
                ),
              )}
            </ul>
            <p data-testid="instructions">
              Instructions:
              {'  '}
              {strInstructions}
            </p>
            <ReactPlayer url={ strYoutube } width="30%" data-testid="video" />
            <div data-testid="start-recipe-btn" />
            <button type="button" data-testid="start-recipe-btn">Start</button>
          </div>
        ))
      }
    </div>
  );
}

export default FoodDetailsCards;

FoodDetailsCards.propTypes = {
  state: PropTypes.string.isRequired,
};

// ReactPlayer retirado do site https://www.npmjs.com/package/react-player.
