import React, { useContext, useState, useEffect } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import FoodContext from '../context/FoodContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import getLocalStorage from '../services/getLocalStorage';

export default function FavoriteRecipesCards() {
  const { favorite, setFavorite, auxFavorite, setAuxFavorite } = useContext(FoodContext);

  const [msg, setMsg] = useState(false);
  console.log(auxFavorite);

  useEffect(() => {
    const verifyLocalStorage = () => {
      if (favorite) {
        const favoriteRecipes = favorite.length > 0 && getLocalStorage();
        setAuxFavorite(favoriteRecipes);
      }
    };
    verifyLocalStorage();
  }, [setAuxFavorite, favorite]);

  const removeFavorite = (id) => {
    let favoriteRecipes = [...favorite];
    favoriteRecipes = favorite.filter((recipe) => recipe.id !== id);
    const setRecipes = JSON.stringify(favoriteRecipes);
    localStorage.setItem('favoriteRecipes', setRecipes);
    setAuxFavorite(favoriteRecipes);
    setFavorite(favoriteRecipes);
  };

  const shareLink = (id, type) => {
    const TIME = 2000;
    const url = `http://localhost:3000/${type}s/${id}`;
    clipboardCopy(url);
    setMsg(true);
    setTimeout(() => setMsg(false), TIME);
  };

  const filter = (type) => {
    if (type === 'all') {
      setAuxFavorite(favorite);
    }
    if (type === 'food') {
      const favorites = favorite.filter((recipe) => recipe.type === type);
      setAuxFavorite(favorites);
    }
    if (type === 'drink') {
      const favorites = favorite.filter((recipe) => recipe.type === type);
      setAuxFavorite(favorites);
    }
  };

  return (
    <section>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => filter('all') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => filter('food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filter('drink') }
      >
        Drink
      </button>
      {auxFavorite.length > 0 ? auxFavorite
        .map(({
          id,
          image,
          category,
          nationality,
          name,
          alcoholicOrNot,
          type },
        index) => (
          <div key={ id }>
            <Link to={ `/${type}s/${id}` }>
              <img
                src={ image }
                alt={ `favorite-${index}` }
                width="30%"
                data-testid={ `${index}-horizontal-image` }
              />
              <span data-testid={ `${index}-horizontal-top-text` }>
                {type === 'drink'
                  ? alcoholicOrNot
                  : `${nationality} - ${category}`}
              </span>
              <h4
                data-testid={ `${index}-horizontal-name` }
              >
                {name}
              </h4>
            </Link>
            {msg && <p>Link copied!</p>}
            <button
              type="button"
              onClick={ () => shareLink(id, type) }
            >
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                alt="share-btn"
              />
            </button>
            <button
              type="button"
              onClick={ () => removeFavorite(id) }
            >
              <img
                src={ blackHeartIcon }
                alt="share-btn"
                data-testid={ `${index}-horizontal-favorite-btn` }
              />
            </button>
          </div>
        )) : <h4>Não há nada por aqui...</h4>}
    </section>
  );
}
