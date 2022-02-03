import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from './Search';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ pageName }) {
  const [search, setSearch] = useState(false);
  const clickSearch = () => {
    setSearch(!search);
  };

  const renderButton = () => {
    if (pageName === 'Foods'
      || pageName === 'Drinks'
      || pageName === 'Explore Nationalities') {
      return (
        <button
          type="button"
          onClick={ () => clickSearch() }
        >
          <img
            src={ searchIcon }
            alt="explore-icon"
            data-testid="search-top-btn"
          />
        </button>
      );
    }
  };

  return (
    <header>
      <span>
        <Link to="/profile">
          <img
            src={ profileIcon }
            alt="profile-icon"
            data-testid="profile-top-btn"
          />
        </Link>
      </span>
      <h1
        data-testid="page-title"
      >
        {pageName}
      </h1>
      <span>
        {renderButton()}
        { search && <Search pageName={ pageName } />}
      </span>
    </header>
  );
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Header;
