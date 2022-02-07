import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import DrinkContext from '../context/DrinkContext';

function DrinksDetailsCards(
  { drinksDetails: { msg, favorite, click, share, ddetails, ingredients, id } },
) {
  const { prog, setProg, done } = useContext(DrinkContext);
  const history = useHistory();

  const handleButton = () => {
    if (prog) {
      return (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="recipe-btn"
          onClick={ () => history.push(`/drinks/${id}/in-progress`) }
        >
          Continue Recipe
        </button>
      );
    }
    return (
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="recipe-btn"
        onClick={
          () => { history.push(`/drinks/${id}/in-progress`); setProg(true); }
        }
      >
        Start Recipe
      </button>
    );
  };

  return (
    <div>
      {
        ddetails && ddetails.map(({
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
              { `Categoria: ${strCategory}, ${strAlcoholic}` }
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
            { !done && handleButton() }
          </div>
        ))
      }
    </div>
  );
}

DrinksDetailsCards.propTypes = {
  drinksDetails: PropTypes.shape({
    click: PropTypes.func,
    share: PropTypes.func,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    msg: PropTypes.bool,
    favorite: PropTypes.bool,
    ddetails: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
  }).isRequired,
};

export default DrinksDetailsCards;
