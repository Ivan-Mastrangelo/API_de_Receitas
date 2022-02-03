import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const [login, setLogin] = useState([]);
  useEffect(() => {
    const response = localStorage.getItem('user');
    const user = JSON.parse(response);
    setLogin(user);
  }, []);

  const HISTORY = useHistory();

  const handleClick = () => {
    localStorage.clear();
    const path = '/';
    HISTORY.push(path);
  };

  return (
    <>
      <Header pageName="Profile" />
      <h2 data-testid="profile-email">{login && login.email}</h2>
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
      <Footer />
    </>
  );
}
