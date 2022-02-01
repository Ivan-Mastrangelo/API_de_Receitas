import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <span className="footer-icon">
        <Link to="/drinks">
          <img
            src={ drinkIcon }
            alt="drink-icon"
            data-testid="drinks-bottom-btn"
            className="drink-icon"
          />
        </Link>
      </span>
      <span className="footer-icon">
        <Link to="/explore">
          <img
            src={ exploreIcon }
            alt="explore-icon"
            data-testid="explore-bottom-btn"
            className="explore-icon"
          />
        </Link>
      </span>
      <span className="footer-icon">
        <Link to="/foods">
          <img
            src={ mealIcon }
            alt="meal-icon"
            data-testid="food-bottom-btn"
            className="meal-icon"
          />
        </Link>
      </span>
    </footer>
  );
}

export default Footer;
