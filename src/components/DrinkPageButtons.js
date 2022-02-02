import React, { useContext } from 'react';
import DrinkContext from '../context/DrinkContext';
import { getDrinkByCategory } from '../services/drinkAPI';

export default function DrinkPageButtons() {
  const { auxDrink, setAuxDrink, drink, drinkCategory } = useContext(DrinkContext);
  const cinco = 5;

  const fetchDrinkByCategory = async (param) => {
    const { target } = auxDrink;
    if (target !== param) {
      const response = await getDrinkByCategory(param);
      setAuxDrink({ recipe: response, target: param });
    }
    // setDrinkByCategory((prevState) => ({
    //   ...prevState, apKey: response.drinks, actionBtn: !prevState.actionBtn,
    // }));
    if (target === param) {
      setAuxDrink({ recipe: drink, target: '' });
    }
  };

  const returnAllCategories = () => {
    setAuxDrink({ recipe: drink, target: '' });
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
