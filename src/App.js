import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipeProvider from './context/RecipeProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecipeProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ FoodCard } />
        <Route exact path="/drinks/:id" component={ DrinkCard } />
        <Route exact path="/foods/:id/in-progress" component={ FoodProg } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinkProg } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/explore/foods/ingredients" component={ FoodIng } />
        <Route exact path="/explore/foods/ingredients" component={ DrinksIng } />
        <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ Done } />
        <Route exact path="/favorite-recipes" component={ Favorites } />
      </Switch>
    </RecipeProvider>
  );
}

export default App;
