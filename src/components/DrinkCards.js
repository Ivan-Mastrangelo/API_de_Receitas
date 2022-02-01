import React, { useContext } from 'react';
import DrinkContext from '../context/DrinkContext';

export default function DrinkCards() {
  const { drink, drinkByCategory: { actionBtn, apKey } } = useContext(DrinkContext);
  const doze = 12;
  console.log(drink);

  return (
    <div>
      {
        actionBtn && apKey.filter((_, index) => index < doze)
          .map(({ strDrink, strDrinkThumb }, index) => (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <span data-testid={ `${index}-card-name` }>{strDrink}</span>
              <img
                data-testid={ `${index}-card-img` }
                src={ strDrinkThumb }
                alt={ strDrink }
                style={ { width: '100px' } }
              />
            </div>
          ))
      }
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
                style={ { width: '100px' } }
              />
            </div>
          ))
      }
    </div>
  );
}
