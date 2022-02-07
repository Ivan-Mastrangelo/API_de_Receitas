import React from 'react';
import PropTypes from 'prop-types';
import FoodFunctionCard from '../components/FoodFunctionCard';

export default function FoodDetails({ match: { params: { id } } }) {
  return (
    <div>
      <FoodFunctionCard id={ id } />
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
