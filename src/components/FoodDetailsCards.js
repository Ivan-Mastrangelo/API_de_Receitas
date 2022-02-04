import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { getMealById } from '../services/foodAPI';
import FoodContext from '../context/FoodContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import DrinksRecommendation from './DrinksRecommendation';

function FoodDetailsCards({ id }) {
  const { details, setDetails, prog, setProg } = useContext(FoodContext);
  const history = useHistory();
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

  // const handleButton = () => {
  // // if (prog) {
  //   // return (
  //   //   <button
  //   //     type="button"
  //   //     data-testid="start-recipe-btn"
  //   //     className="recipe-btn"
  //   //     onClick={ () => history.push(`/foods/${id}/in-progress`) }
  //   //   >
  //   //     Continue Recipe
  //   //   </button>
  //   // );
  //   (
  //     <button
  //       type="button"
  //       data-testid="start-recipe-btn"
  //       className="recipe-btn"
  //       onClick={
  //         () => { history.push(`/foods/${id}/in-progress`); setProg(true); }
  //       }
  //     >
  //       {prog ? 'Continue Recipe' : 'Start Recipe'}
  //     </button>
  //   );
  // };

  const handleClick = () => {
    history.push(`/foods/${id}/in-progress`);
    localStorage.setItem('progress', true);
    setProg(true);
  };

  const shareLink = () => {
    // console.log(history);
  };

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
              width="100%"
            />
            <h3 data-testid="recipe-title">
              { strMeal }
            </h3>
            <button
              type="button"
              data-testid="share-btn"
              onClick={ () => shareLink() }
            >
              <img src={ shareIcon } alt="share-icon" />
            </button>
            <button type="button" data-testid="favorite-btn">
              <img src={ whiteHeartIcon } alt="favorite-icon" />
            </button>
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
            <ReactPlayer url={ strYoutube } width="100%" data-testid="video" />
            <DrinksRecommendation />
            {/* { handleButton() } */}
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="recipe-btn"
              onClick={
                () => handleClick()
              }
            >
              {prog ? 'Continue Recipe' : 'Start Recipe'}
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default FoodDetailsCards;

FoodDetailsCards.propTypes = {
  id: PropTypes.string.isRequired,
};

// ReactPlayer retirado do site https://www.npmjs.com/package/react-player.
