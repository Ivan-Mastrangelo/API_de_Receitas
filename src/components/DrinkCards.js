import React, { useContext } from 'react';
import DrinkContext from '../context/DrinkContext';

export default function DrinkCards() {
  const { drink } = useContext(DrinkContext);
  const doze = 12;
  console.log(drink);
  return (
    <div>
      {
        drink.drinks && drink.drinks
          .filter((_, index) => index < doze)
          .map(({ id, strDrinkThumb, strDrink }, index) => (
            <div key={ id } data-testid={ `${index}-recipe-card` }>
              <span data-testid={ `${index}-card-name` }>{strDrink}</span>
              <img
                src={ `${strDrinkThumb}/preview` }
                alt={ strDrink }
                data-testid={ `${index}-card-img` }
              />
            </div>
          ))
      }
    </div>
  );
}
