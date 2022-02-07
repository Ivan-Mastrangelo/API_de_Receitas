import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FoodContext from '../context/FoodContext';

export default function ExploreFoodIngredients() {
  const { mealIngredients } = useContext(FoodContext);
  const doze = 12;

  return (
    <>
      <Header pageName="Explore Ingredients" />
      <div>
        {
          mealIngredients && mealIngredients
            .filter((_, index) => index < doze)
            .map(({ idIngredient, strIngredient }, index) => (
              <Link
                key={ idIngredient }
                to="/foods"
                data-testid={ `${index}-ingredient-card` }
              >
                <div>
                  <img
                    src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                    alt={ strIngredient }
                    data-testid={ `${index}-card-img` }
                  />
                  <span data-testid={ `${index}-card-name` }>{ strIngredient }</span>
                </div>
              </Link>
            ))
        }
      </div>
      <Footer />
    </>
  );
}
