import React from 'react';
import PropTypes from 'prop-types';
import DrinksFunctionCards from '../components/DrinksFunctionCards';

export default function DrinksDetails({ match: { params: { id } } }) {
  return (
    <div>
      <DrinksFunctionCards id={ id } />
    </div>
  );
}

DrinksDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
