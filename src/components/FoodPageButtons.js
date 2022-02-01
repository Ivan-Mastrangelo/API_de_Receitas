import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';

export default function FoodPageButtons() {
  const { foodCategory } = useContext(FoodContext);
  const cinco = 5;
  console.log(foodCategory);
  return (
    <div>
      {
        foodCategory.meals && foodCategory.meals
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
