import React from 'react';
import PropTypes from 'prop-types';
import DrinksDetailsCards from '../components/DrinksDetailsCards';

export default function DrinksDetails({ match: { params: { id } } }) {
  return (
    <div>
      <DrinksDetailsCards id={ id } />
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
