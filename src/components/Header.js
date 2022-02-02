import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from './Search';

function Header(
  { icon1, nameIcon1, pageName, icon2, nameIcon2, iconId1, nameId, iconId2 },
) {
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
            src={ icon2 }
            alt={ nameIcon2 }
            data-testid={ iconId2 }
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
            src={ icon1 }
            alt={ nameIcon1 }
            data-testid={ iconId1 }
          />
        </Link>
      </span>
      <h1
        data-testid={ nameId }
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

export default Header;

Header.propTypes = {
  icon1: PropTypes.string.isRequired,
  nameIcon1: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  nameIcon2: PropTypes.string.isRequired,
  iconId1: PropTypes.string.isRequired,
  nameId: PropTypes.string.isRequired,
  iconId2: PropTypes.string.isRequired,
};
