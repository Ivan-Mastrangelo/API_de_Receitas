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
      // setMealByCategory((prevState) => ({
      //   ...prevState, apiKey: response.meals, actionBtn: !prevState.actionBtn,
      // }));
    }
    if (target === param) {
      setAuxFood({ recipe: food, target: '' });
    }
    // console.log(response);
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
