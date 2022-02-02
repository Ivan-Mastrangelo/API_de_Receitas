import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ change, click }) {
  return (
    <div>
      <input
        type="text"
        name="value"
        data-testid="search-input"
        onChange={ change }
      />
      {'  '}
      <label htmlFor="ingredient-search">
        <input
          type="radio"
          onChange={ change }
          data-testid="ingredient-search-radio"
          id="ingredient-search"
          value="ingredient"
          name="search"
        />
        Ingredient
      </label>
      {'  '}
      <label htmlFor="name-search">
        <input
          type="radio"
          onChange={ change }
          data-testid="name-search-radio"
          id="name-search"
          value="name"
          name="search"
        />
        Name
      </label>
      {'  '}
      <label htmlFor="letter-search">
        <input
          type="radio"
          onChange={ change }
          data-testid="first-letter-search-radio"
          id="letter-search"
          value="letter"
          name="search"
        />
        First letter
      </label>
      {'  '}
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ click }
      >
        Search
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  change: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};
