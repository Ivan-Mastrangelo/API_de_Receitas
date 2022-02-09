import React from 'react';
import FavoriteRecipesCards from '../components/FavoriteRecipesCards';
import Header from '../components/Header';

function Favorites() {
  return (
    <>
      <Header pageName="Favorite Recipes" />
      <FavoriteRecipesCards />
    </>
  );
}

export default Favorites;
