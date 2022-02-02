import React, { useContext } from 'react';
import DrinkContext from '../context/DrinkContext';

export default function DrinkCards() {
  const { auxDrink: { recipe: { drinks } } } = useContext(DrinkContext);
  const doze = 12;

  return (
    <div>
      {
        drinks && drinks
          .filter((_, index) => index < doze)
          .map(({ strDrinkThumb, strDrink }, index) => (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <span data-testid={ `${index}-card-name` }>{strDrink}</span>
              <img
                src={ `${strDrinkThumb}/preview` }
                alt={ strDrink }
                data-testid={ `${index}-card-img` }
                style={ { width: '100px' } }
              />
            </div>
          ))
      }
    </div>
  );
}
