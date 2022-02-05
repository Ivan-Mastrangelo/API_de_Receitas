import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDrinkById } from '../services/drinkAPI';
import DrinkContext from '../context/DrinkContext';
import FoodsRecommendation from './FoodsRecommendation';

function DrinksDetailsCards({ id }) {
  const { ddetails, setDdetails, prog, setProg, done } = useContext(DrinkContext);
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
            <button type="button" data-testid="share-btn">share</button>
            <button type="button" data-testid="favorite-btn">Favorite</button>
            <p data-testid="recipe-category">
              { `Categoria: ${strCategory}, ${strAlcoholic}` }
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
            <FoodsRecommendation />
            { !done && handleButton() }
          </div>
        ))
      }
    </div>
  );
}

DrinksDetailsCards.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DrinksDetailsCards;
