import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';
import { getMealByCategory } from '../services/foodAPI';

export default function FoodPageButtons() {
  const { auxFood, food, setAuxFood, foodCategory } = useContext(FoodContext);
  const cinco = 5;

  const fetchMealByCategory = async (param) => {
    const { target } = auxFood;
    if (target !== param) {
      const response = await getMealByCategory(param);
      setAuxFood({ recipe: response, target: param });
    }
    if (target === param) {
      setAuxFood({ recipe: food, target: '' });
    }
  };

  const returnAllCategories = () => {
    setAuxFood({ recipe: food, target: '' });
  };

  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ returnAllCategories }
      >
        All
      </button>
      {
        foodCategory.meals && foodCategory.meals
          .filter((_, index) => index < cinco)
          .map(({ strCategory }) => (
            <button
              type="button"
              key={ strCategory }
              data-testid={ `${strCategory}-category-filter` }
              onClick={ () => fetchMealByCategory(strCategory) }
            >
              { strCategory }
            </button>
          ))
      }
    </div>
  );
}
