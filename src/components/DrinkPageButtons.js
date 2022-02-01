import React, { useContext } from 'react';
import DrinkContext from '../context/DrinkContext';
import { getDrinkByCategory } from '../services/drinkAPI';

export default function DrinkPageButtons() {
  const { drinkCategory, setDrinkByCategory } = useContext(DrinkContext);
  const cinco = 5;
  console.log(drinkCategory);

  const fetchDrinkByCategory = async (param) => {
    const response = await getDrinkByCategory(param);
    setDrinkByCategory((prevState) => ({
      ...prevState, apKey: response.drinks, actionBtn: !prevState.actionBtn,
    }));
    console.log(response);
  };

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
              onClick={ () => fetchDrinkByCategory(strCategory) }
            >
              { strCategory }
            </button>
          ))
      }
    </div>
  );
}
