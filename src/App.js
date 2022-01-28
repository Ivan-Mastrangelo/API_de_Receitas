import React from 'react';
import RecipeProvider from './context/RecipeProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './Rotas';

function App() {
  return (
    <RecipeProvider>
      <Rotas />
    </RecipeProvider>
  );
}

export default App;
