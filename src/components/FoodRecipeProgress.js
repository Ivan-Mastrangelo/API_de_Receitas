import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMealById } from '../services/foodAPI';
import FoodContext from '../context/FoodContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

function FoodInProgress({ id }) {
  const { recipeprogress, setRecipeProgress } = useContext(FoodContext);
  // const [check, setCheck] = useState(false);
  console.log(recipeprogress);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getMealById(id);
      setRecipeProgress(response.meals);
    };
    fetchAPI();
  }, [setRecipeProgress, id]);

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
    console.log(e.target);
    e.target.classList.toggle('checked');
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
            {/* {msg && <p>Link copied!</p>} */}
            <button
              type="button"
              data-testid="share-btn"
              // onClick={ share }
            >
              <img src={ shareIcon } alt="share-icon" />
            </button>
            <button
              // onClick={ click }
              type="button"
            >
              <img
                data-testid="favorite-btn"
                src={ whiteHeartIcon }
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
                        // className="checked"
                        type="checkbox"
                        id={ ingredient }
                        value={ ingredients }
                        onChange={ (e) => handleCheck(e) }
                      />
                      {ingredient}
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
