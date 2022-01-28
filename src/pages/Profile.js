import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function Perfil() {
  const response = localStorage.getItem('user');
  const user = JSON.parse(response);
  const HISTORY = useHistory();

  const handleClick = () => {
    localStorage.clear();
    const path = '/';
    HISTORY.push(path);
  };

  return (
    <>
      <h2 data-testid="profile-email">{user.email}</h2>
      <Link to="/done-recipes">
        <button type="button" data-testid="profile-done-btn">
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button type="button" data-testid="profile-favorite-btn">
          Favorite Recipes
        </button>
      </Link>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleClick }
      >
        Logout
      </button>
    </>
  );
}
