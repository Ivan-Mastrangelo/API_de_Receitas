import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import DrinkContext from './DrinkContext';

function RecipeProvider({ children }) {
  const [user, setUser] = useState({ email: '', senha: '' });
  // const [food, setFood] = useState([]);
  // const [drink, setDrink] = useState([]);

  const login = (value) => {
    setUser({
      email: value.email,
      senha: value.senha,
    });
  };

  const foodContext = {
    user,
    login,
    food,
  };

  const drinkContext = {
    user,
    drink,
  };

  return (
    <FoodContext.Provider value={ foodContext }>
      <DrinkContext.Provider value={ drinkContext }>
        { children }
      </DrinkContext.Provider>
    </FoodContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeProvider;
