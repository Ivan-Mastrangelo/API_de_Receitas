import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DrinkContext from '../context/DrinkContext';

export default function DrinkCards() {
  const { auxDrink: { recipe: { drinks } } } = useContext(DrinkContext);
  const doze = 12;

  return (
    <div>
      {
        drinks && drinks
          .filter((_, index) => index < doze)
          .map(({ idDrink, strDrinkThumb, strDrink }, index) => (
            <Link
              to={ `/drinks/${idDrink}` }
              key={ idDrink }
              data-testid={ `${index}-recipe-card` }
            >
              <div>
                <span data-testid={ `${index}-card-name` }>{strDrink}</span>
                <img
                  src={ `${strDrinkThumb}/preview` }
                  alt={ strDrink }
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
