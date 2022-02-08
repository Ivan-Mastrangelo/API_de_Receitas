import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDrinkById } from '../services/drinkAPI';
import DrinkContext from '../context/DrinkContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function DrinkRecipeProgress({ id }) {
  const { recipeprogress, setRecipeProgress } = useContext(DrinkContext);
  // const [check, setCheck] = useState(false);
  console.log(id);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getDrinkById(id);
      setRecipeProgress(response.drinks);
    };
    fetchAPI();
  }, [setRecipeProgress, id]);

  const setArrayIngredients = () => {
    if (recipeprogress.length > 0) {
      const quinze = 15;
      const array = recipeprogress[0];
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
    console.log(e.target);
    e.target.classList.toggle('checked');
  };
  return (
    <div>
      {
        recipeprogress && recipeprogress.map(({
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

DrinkRecipeProgress.propTypes = {
  id: PropTypes.string.isRequired,
};
