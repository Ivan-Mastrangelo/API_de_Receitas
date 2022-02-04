import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getDrinkById } from '../services/drinkAPI';
import DrinkContext from '../context/DrinkContext';

function DrinksDetailsCards({ id }) {
  const { ddetails, setDdetails } = useContext(DrinkContext);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getDrinkById(id);
      setDdetails(response.drinks);
    };
    fetchAPI();
  }, [setDdetails, id]);
  console.log(ddetails);

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

  console.log(ingredientsAndMeasures);

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
              width="15%"
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
            <div data-testid="0-recomendation-card" />
            <button type="button" data-testid="start-recipe-btn">Start</button>
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
