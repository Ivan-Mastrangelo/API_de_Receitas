import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';

export default function FoodCards() {
  const { food, mealByCategory: { actionBtn, apiKey } } = useContext(FoodContext);
  const doze = 12;

  return (
    <div>
      {
        actionBtn && apiKey.filter((_, index) => index < doze)
          .map(({ strMeal, strMealThumb }, index) => (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <span data-testid={ `${index}-card-name` }>{strMeal}</span>
              <img
                data-testid={ `${index}-card-img` }
                src={ strMealThumb }
                alt={ strMeal }
                style={ { width: '100px' } }
              />
            </div>
          ))
      }
      {
        food.meals && !actionBtn && food.meals
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
