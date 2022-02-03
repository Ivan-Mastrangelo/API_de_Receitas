import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreFood() {
  const history = useHistory();

  const fetchAPI = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const { meals } = await fetch(url).then((response) => response.json());
    return meals;
  };

  const handleClick = async () => {
    const fetchResult = await fetchAPI();
    history.push(`/foods/${fetchResult[0].idMeal}`);
  };

  return (
    <>
      <Header pageName="Explore Foods" />
      <Link to="/explore/foods/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
      </Link>
      <Link to="/explore/foods/nationalities">
        <button
          type="button"
          data-testid="explore-by-nationality"
        >
          By Nationality
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleClick }
      >
        Surprise me!
      </button>
      <Footer />
    </>
  );
}
