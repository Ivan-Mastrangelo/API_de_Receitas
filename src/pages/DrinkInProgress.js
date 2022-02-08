import React from 'react';
import PropTypes from 'prop-types';
import DrinkRecipeProgress from '../components/DrinkRecipeProgress';

export default function DrinkInProgress({ match: { params: { id } } }) {
  return (
    <div>
      <DrinkRecipeProgress id={ id } />
    </div>
  );
}

DrinkInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
