import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';

export default function FoodCards() {
  const { food } = useContext(FoodContext);
  const doze = 12;

  return (
    <div>
      {
        food.meals && food.meals
          .filter((_, index) => index < doze)
          .map(({ id, strMealThumb, strMeal }, index) => (
            <div key={ id } data-testid={ `${index}-recipe-card` }>
              <span data-testid={ `${index}-card-name` }>{strMeal}</span>
              <img
                src={ `${strMealThumb}/preview` }
                alt={ strMeal }
                data-testid={ `${index}-card-img` }
              />
            </div>
          ))
      }
    </div>
  );
}
