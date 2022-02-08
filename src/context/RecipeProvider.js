import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import DrinkContext from './DrinkContext';
import LoginContext from './LoginContext';
import { getAllMeal, getMealIngredients, getMealCategories } from '../services/foodAPI';
import { getAllDrinks, getDrinkCategories, getDrinkIng } from '../services/drinkAPI';
import getLocalStorage from '../services/getLocalStorage';

function RecipeProvider({ children }) {
  // Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  // Recipe Details
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [auxFood, setAuxFood] = useState({ recipe: [], target: '' });
  const [auxDrink, setAuxDrink] = useState({ recipe: [], target: '' });
  const [details, setDetails] = useState([]);
  const [ddetails, setDdetails] = useState([]);
  // Recipe Categories
  const [foodCategory, setFoodCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [mealByCategory, setMealByCategory] = useState({ apiKey: [], actionBtn: false });
  const [drinkByCategory, setDrinkByCategory] = useState({ apKey: [], actionBtn: false });
  // Ingredients
  const [mealIngredients, setMealIngredients] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  // Booleans
  const [prog, setProg] = useState(true);
  const [done, setDone] = useState(false);
  const [favorite, setFavorite] = useState({});
  const [recipeprogress, setRecipeProgress] = useState([]);

  // API
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getAllMeal();
      setFood(response);
      setAuxFood({ recipe: response, target: '' });
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getAllDrinks();
      setDrink(response);
      setAuxDrink({ recipe: response, target: '' });
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPIFoodCategory = async () => {
      const response = await getMealCategories();
      setFoodCategory(response);
    };
    fetchAPIFoodCategory();
  }, []);

  useEffect(() => {
    const fetchAPIDrinkCategory = async () => {
      const response = await getDrinkCategories();
      setDrinkCategory(response);
    };
    fetchAPIDrinkCategory();
  }, []);

  useEffect(() => {
    const fetchMealIngredients = async () => {
      const response = await getMealIngredients();
      setMealIngredients(response.meals);
    };
    fetchMealIngredients();
  }, []);

  useEffect(() => {
    const fetchDrinkIngredients = async () => {
      const response = await getDrinkIng();
      setDrinkIngredients(response.drinks);
    };
    fetchDrinkIngredients();
  }, []);

  // Local Storage
  useEffect(() => {
    const favoriteRecipes = getLocalStorage();
    setFavorite(favoriteRecipes);
  }, []);

  // Contexts
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
    mealByCategory,
    setMealByCategory,
    auxFood,
    setAuxFood,
    details,
    setDetails,
    prog,
    setProg,
    done,
    setDone,
    favorite,
    setFavorite,
    recipeprogress,
    setRecipeProgress,
    mealIngredients,
  };

  const drinkContext = {
    email,
    setEmail,
    drink,
    setDrink,
    drinkCategory,
    drinkByCategory,
    setDrinkByCategory,
    auxDrink,
    setAuxDrink,
    ddetails,
    setDdetails,
    prog,
    setProg,
    done,
    setDone,
    recipeprogress,
    setRecipeProgress,
    drinkIngredients,
    favorite,
    setFavorite,
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
