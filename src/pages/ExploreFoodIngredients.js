import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FoodContext from '../context/FoodContext';
import { getMealByIngredient } from '../services/foodAPI';

export default function ExploreFoodIngredients() {
  const { mealIngredients, setAuxFood } = useContext(FoodContext);
  const doze = 12;
  const history = useHistory();

  const passMyIngredient = async (strIngredient) => {
    const response = await getMealByIngredient(strIngredient);
    setAuxFood({ recipe: response, target: '' });
    history.push('/foods');
  };

  return (
    <>
      <Header pageName="Explore Ingredients" />
      <div>
        {
          mealIngredients && mealIngredients
            .filter((_, index) => index < doze)
            .map(({ idIngredient, strIngredient }, index) => (
              <button
                type="button"
                key={ idIngredient }
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => passMyIngredient(strIngredient) }
              >
                <div>
                  <img
                    src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                    alt={ strIngredient }
                    data-testid={ `${index}-card-img` }
                  />
                  <span data-testid={ `${index}-card-name` }>{ strIngredient }</span>
                </div>
              </button>
            ))
        }
      </div>
      <Footer />
    </>
  );
}
