import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function DrinksRecomendation(
  { drinksRecommend: { recomendation, changePosition, position } },
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
      <h3>Recomendations</h3>
      <section className="galery">
        { recomendation.map(
          ({ strGlass, strDrinkThumb, strAlcoholic, strDrink }, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <div
                className={ index === position.positionOne
                || index === position.positionTwo ? 'selected' : 'notSelected' }
              >
                <img
                  src={ strDrinkThumb }
                  alt={ strDrink }
                  width="100%"
                />
                <p>{strAlcoholic}</p>
                <p data-testid={ `${index}-recomendation-title` }>{strDrink}</p>
                <p>{strGlass}</p>
              </div>
            </div>
          ),
        )}
      </section>
    </>
  );
}

DrinksRecomendation.propTypes = {
  drinksRecommend: PropTypes.shape({
    recomendation: PropTypes.arrayOf(PropTypes.object),
    changePosition: PropTypes.func,
    position: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};
