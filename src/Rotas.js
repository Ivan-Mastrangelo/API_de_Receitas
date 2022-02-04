import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import FoodDetails from './pages/FoodDetails';
import DrinksDetails from './pages/DrinksDetails';
import FoodProg from './pages/FoodInProgress';
import DrinksProg from './pages/DrinkInProgres';
import Explore from './pages/Explore';
import ExploreFood from './pages/ExploreFood';
import ExploreDrink from './pages/ExploreDrinks';
import FoodIng from './pages/ExploreFoodIngredients';
import DrinksIng from './pages/ExploreDrinksIngredients';
import Nationalities from './pages/ExploreNationalities';
import Profile from './pages/Profile';
import Done from './pages/DoneRecepies';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ FoodDetails } />
        <Route exact path="/drinks/:id" component={ DrinksDetails } />
        <Route exact path="/foods/:id/in-progress" component={ FoodProg } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinksProg } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFood } />
        <Route exact path="/explore/drinks" component={ ExploreDrink } />
        <Route exact path="/explore/foods/ingredients" component={ FoodIng } />
        <Route exact path="/explore/drinks/ingredients" component={ DrinksIng } />
        <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ Done } />
        <Route exact path="/favorite-recipes" component={ Favorites } />
        <Route path="" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
