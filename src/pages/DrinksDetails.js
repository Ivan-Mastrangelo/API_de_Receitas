import React from 'react';
import PropTypes from 'prop-types';
import DrinksDetailsCards from '../components/DrinksDetailsCards';

export default function DrinksDetails({ location: { state } }) {
  console.log(state);
  return (
    <div>
      <DrinksDetailsCards state={ state } />
    </div>
  );
}

DrinksDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string.isRequired,
  }).isRequired,
};
