import React from 'react';
import PropTypes from 'prop-types';
import FoodDetailsCards from '../components/FoodDetailsCards';

export default function FoodDetails({ location: { state } }) {
  return (
    <div>
      <FoodDetailsCards state={ state } />
    </div>
  );
}

FoodDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string.isRequired,
  }).isRequired,
};
