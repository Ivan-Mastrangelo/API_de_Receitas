import React from 'react';
import PropTypes from 'prop-types';
import FoodDetailsCards from '../components/FoodDetailsCards';

export default function FoodDetails({ match: { params: { id } } }) {
  return (
    <div>
      <FoodDetailsCards id={ id } />
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
