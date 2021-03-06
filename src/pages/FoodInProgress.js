import React from 'react';
import PropTypes from 'prop-types';
import FoodRecipeProgress from '../components/FoodRecipeProgress';

function FoodInProgress({ match: { params: { id } } }) {
  return (
    <div>
      <FoodRecipeProgress id={ id } />
    </div>
  );
}

FoodInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodInProgress;
