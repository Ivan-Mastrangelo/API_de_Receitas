import React, { useState, useEffect } from 'react';
import { getAllMeal } from '../services/foodAPI';

export default function FoodsRecommendation() {
  const [foodsData, setFoodsData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getAllMeal();
      setFoodsData(response.meals);
    }
    fetchData();
  }, []);

  const setRecomendationArray = () => {
    const recommendationArray = [];
    const five = 5;
    if (foodsData.length > 0) {
      for (let i = 0; i <= five; i += 1) {
        recommendationArray.push(foodsData[i]);
      }
    }
    return recommendationArray;
  };

  const recommendation = setRecomendationArray();

  return (
    <>
      <p>Recommendations</p>
      <section>
        { recommendation.map(
          ({ strMeal, strMealThumb, strCategory }, index) => (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <img
                src={ strMealThumb }
                alt={ strMeal }
                width="50%"
              />
              <p>{strCategory}</p>
              <p data-testid={ `${index}-recomendation-title` }>{strMeal}</p>
            </div>
          ),
        )}
      </section>
    </>
  );
}
