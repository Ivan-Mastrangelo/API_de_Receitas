import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';
import { getMealByCategory } from '../services/foodAPI';

export default function FoodPageButtons() {
  const { foodCategory, setMealByCategory } = useContext(FoodContext);
  const cinco = 5;

  const fetchMealByCategory = async (param) => {
    const response = await getMealByCategory(param);
    setMealByCategory((prevState) => ({
      ...prevState, apiKey: response.meals, actionBtn: !prevState.actionBtn,
    }));
    console.log(response);
  };

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
              onClick={ () => fetchMealByCategory(strCategory) }
            >
              { strCategory }
            </button>
          ))
      }
    </div>
  );
}
