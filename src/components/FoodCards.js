import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FoodContext from '../context/FoodContext';

export default function FoodCards() {
  const { auxFood: { recipe: { meals } } } = useContext(FoodContext);
  const doze = 12;

  return (
    <div>
      {
        meals && meals
          .filter((_, index) => index < doze)
          .map(({ idMeal, strMealThumb, strMeal }, index) => (
            <Link
              to={ `/foods/${idMeal}` }
              key={ idMeal }
              data-testid={ `${index}-recipe-card` }
            >
              <div>
                <span data-testid={ `${index}-card-name` }>{strMeal}</span>
                <img
                  src={ `${strMealThumb}` }
                  alt={ strMeal }
                  data-testid={ `${index}-card-img` }
                  style={ { width: '100px' } }
                />
              </div>
            </Link>
          ))
      }
    </div>
  );
}
