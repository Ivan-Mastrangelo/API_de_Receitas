import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';

export default function FoodCards() {
  const { auxFood: { recipe: { meals } } } = useContext(FoodContext);
  const doze = 12;

  return (
    <div>
      {
        meals && meals
          .filter((_, index) => index < doze)
          .map(({ strMealThumb, strMeal }, index) => (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <span data-testid={ `${index}-card-name` }>{strMeal}</span>
              <img
                src={ `${strMealThumb}` }
                alt={ strMeal }
                data-testid={ `${index}-card-img` }
                style={ { width: '100px' } }
              />
            </div>
          ))
      }
    </div>
  );
}
