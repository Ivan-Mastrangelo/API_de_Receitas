import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import DrinkContext from './DrinkContext';
import LoginContext from './LoginContext';

function RecipeProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);

  const loginContext = {
    email,
    setEmail,
    password,
    setPassword,
    loginDisabled,
    setLoginDisabled,
    isLoading,
    setIsLoading,
  };

  const foodContext = {
    email,
    setEmail,
    food,
    setFood,
  };

  const drinkContext = {
    email,
    setEmail,
    drink,
    setDrink,
  };

  return (
    <LoginContext.Provider value={ loginContext }>
      <FoodContext.Provider value={ foodContext }>
        <DrinkContext.Provider value={ drinkContext }>
          { children }
        </DrinkContext.Provider>
      </FoodContext.Provider>
    </LoginContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeProvider;
