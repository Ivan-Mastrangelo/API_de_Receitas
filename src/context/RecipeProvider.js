import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import DrinkContext from './DrinkContext';
import LoginContext from './LoginContext';
import { getAllMeal, getMealCategories } from '../services/foodAPI';
import { getAllDrinks, getDrinkCategories } from '../services/drinkAPI';

function RecipeProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getAllMeal();
      setFood(response);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getAllDrinks();
      setDrink(response);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPIFoodCategory = async () => {
      const response = await getMealCategories();
      setFoodCategory(response);
      console.log(response);
    };
    fetchAPIFoodCategory();
  }, []);

  useEffect(() => {
    const fetchAPIDrinkCategory = async () => {
      const response = await getDrinkCategories();
      setDrinkCategory(response);
      console.log(response);
    };
    fetchAPIDrinkCategory();
  }, []);

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
    foodCategory,
  };

  const drinkContext = {
    email,
    setEmail,
    drink,
    setDrink,
    drinkCategory,
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
