import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinkContext from '../context/DrinkContext';

function ExploreDrinksIngredients() {
  const { drinkIngredients } = useContext(DrinkContext);
  const doze = 12;

  return (
    <>
      <Header pageName="Explore Ingredients" />
      <div>
        {
          drinkIngredients && drinkIngredients
            .filter((_, index) => index < doze)
            .map(({ strIngredient1 }, index) => (
              <Link
                key={ index }
                to="/drinks"
                data-testid={ `${index}-ingredient-card` }
              >
                <div>
                  <img
                    src={ `https://www.themealdb.com/images/ingredients/${strIngredient1}-Small.png` }
                    alt={ strIngredient1 }
                    data-testid={ `${index}-card-img` }
                  />
                  <span data-testid={ `${index}-card-name` }>{ strIngredient1 }</span>
                </div>
              </Link>
            ))
        }
      </div>
      <Footer />
    </>
  );
}

export default ExploreDrinksIngredients;
