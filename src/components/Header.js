import React from 'react';
import PropTypes from 'prop-types';

function Header(
  { icon1, nameIcon1, pageName, icon2, nameIcon2, iconId1, nameId, iconId2 },
) {
  return (
    <header>
      <span>
        <img
          src={ icon1 }
          alt={ nameIcon1 }
          data-testid={ iconId1 }
        />
      </span>
      <span>
        <h1
          data-testid={ nameId }
        >
          {pageName}
        </h1>
      </span>
      <span>
        { pageName === 'Food' || pageName === 'Drink'
          ? <img src={ icon2 } alt={ nameIcon2 } data-testid={ iconId2 } />
          : <> </>}
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
