import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreDrinks() {
  const history = useHistory();

  const fetchAPI = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const { drinks } = await fetch(url).then((response) => response.json());
    return drinks;
  };

  const handleClick = async () => {
    const fetchResult = await fetchAPI();
    history.push(`/drinks/${fetchResult[0].idDrink}`);
  };

  return (
    <>
      <Header pageName="Explore Drinks" />

      <Link to="/explore/drinks/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
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
