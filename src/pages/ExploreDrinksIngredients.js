import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinkContext from '../context/DrinkContext';
import { getDrinkByIngredient } from '../services/drinkAPI';

function ExploreDrinksIngredients() {
  const { drinkIngredients, setAuxDrink } = useContext(DrinkContext);
  const doze = 12;
  const history = useHistory();

  const passMyIngredient = async (strIngredient1) => {
    const response = await getDrinkByIngredient(strIngredient1);
    setAuxDrink({ recipe: response, target: '' });
    history.push('/drinks');
  };

  return (
    <>
      <Header pageName="Explore Ingredients" />
      <div>
        {
          drinkIngredients && drinkIngredients
            .filter((_, index) => index < doze)
            .map(({ strIngredient1 }, index) => (
              <button
                type="button"
                key={ index }
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => passMyIngredient(strIngredient1) }
              >
                <div>
                  <img
                    src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                    alt={ strIngredient1 }
                    data-testid={ `${index}-card-img` }
                  />
                  <span data-testid={ `${index}-card-name` }>{ strIngredient1 }</span>
                </div>
              </button>
            ))
        }
      </div>
      <Footer />
    </>
  );
}

export default ExploreDrinksIngredients;
