import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import FoodContext from '../context/FoodContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FoodDetailsCards(
  { foodDetails: { click, share, ingredients, msg, details, id, favorite } },
) {
  const { prog, setProg } = useContext(FoodContext);
  const history = useHistory();

  const handleButton = () => {
    if (prog) {
      return (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="recipe-btn"
          onClick={ () => history.push(`/foods/${id}/in-progress`) }
        >
          Continue Recipe
        </button>
      );
    }
    (
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="recipe-btn"
        onClick={
          () => { history.push(`/foods/${id}/in-progress`); setProg(true); }
        }
      >
        Start Recipe
      </button>
    );
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
            {msg && <p>Link copied!</p>}
            <button
              type="button"
              data-testid="share-btn"
              onClick={ share }
            >
              <img src={ shareIcon } alt="share-icon" />
            </button>
            <button
              onClick={ click }
              type="button"
            >
              <img
                data-testid="favorite-btn"
                src={ favorite ? blackHeartIcon : whiteHeartIcon }
                alt="share-icon"
              />
            </button>
            <p data-testid="recipe-category">
              Categoria:
              {' '}
              {strCategory}
            </p>
            <ul>
              Ingredients:
              { ingredients.map(
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
            { handleButton() }
          </div>
        ))
      }
    </div>
  );
}

export default FoodDetailsCards;

FoodDetailsCards.propTypes = {
  foodDetails: PropTypes.shape({
    click: PropTypes.func,
    share: PropTypes.func,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    msg: PropTypes.bool,
    favorite: PropTypes.bool,
    details: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
  }).isRequired,
};

// ReactPlayer retirado do site https://www.npmjs.com/package/react-player.
