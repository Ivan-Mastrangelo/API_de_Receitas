import React, { useContext } from 'react';
import DrinkContext from '../context/DrinkContext';

export default function DrinkPageButtons() {
  const { drinkCategory } = useContext(DrinkContext);
  const cinco = 5;
  console.log(drinkCategory);
  return (
    <div>
      {
        drinkCategory.drinks && drinkCategory.drinks
          .filter((_, index) => index < cinco)
          .map(({ strCategory }) => (
            <button
              type="button"
              key={ strCategory }
              data-testid={ `${strCategory}-category-filter` }
            >
              { strCategory }
            </button>
          ))
      }
    </div>
  );
}
