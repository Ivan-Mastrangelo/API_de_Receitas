import React, { useState, useEffect } from 'react';
import { getAllDrinks } from '../services/drinkAPI';

export default function DrinksRecomendation() {
  const [drinksData, setDrinksData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { drinks } = await getAllDrinks();
      setDrinksData([...drinks]);
    }
    fetchData();
  }, []);

  const setRecomendationArray = () => {
    const recommendationArray = [];
    const five = 5;
    if (drinksData.length > 0) {
      for (let i = 0; i <= five; i += 1) {
        recommendationArray.push(drinksData[i]);
      }
    }
    console.log(drinksData);
    console.log(recommendationArray);
    return recommendationArray;
  };

  const recomendation = setRecomendationArray();

  return (
    <>
      <p>Recomendations</p>
      <section>
        { recomendation.map(
          ({ strGlass, strDrinkThumb, strAlcoholic, strDrink }, index) => (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <img
                src={ strDrinkThumb }
                alt={ strDrink }
                width="50%"
              />
              <p>{strAlcoholic}</p>
              <p data-testid={ `${index}-recomendation-title` }>{strDrink}</p>
              <p>{strGlass}</p>
            </div>
          ),
        )}
      </section>
    </>
  );
}
