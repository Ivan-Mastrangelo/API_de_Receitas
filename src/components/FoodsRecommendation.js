import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function FoodsRecommendation(
  { foodRecommend: { recommendation, changePosition, position } },
) {
  useEffect(() => {
    const TIME = 5000;
    const interval = setInterval(
      changePosition, TIME,
    );
    return () => {
      clearInterval(interval);
    };
  }, [changePosition]);

  return (
    <>
      <p>Recommendations</p>
      <section className="galery">
        { recommendation && recommendation.map(
          ({ strMeal, strMealThumb, strCategory }, index) => (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <div
                className={ index === position.positionOne
                || index === position.positionTwo ? 'selected' : 'notSelected' }
              >
                <img
                  src={ strMealThumb }
                  alt={ strMeal }
                  width="100%"
                />
                <p>{strCategory}</p>
                <p data-testid={ `${index}-recomendation-title` }>{strMeal}</p>
              </div>
            </div>
          ),
        )}
      </section>
    </>
  );
}

FoodsRecommendation.propTypes = {
  foodRecommend: PropTypes.shape({
    recommendation: PropTypes.arrayOf(PropTypes.object),
    changePosition: PropTypes.func,
    position: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};
