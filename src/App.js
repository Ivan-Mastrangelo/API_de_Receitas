import React from 'react';
import RecipeProvider from './context/RecipeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Rotas from './Rotas';

function App() {
  return (
    <RecipeProvider>
      <Rotas />
    </RecipeProvider>
  );
}

export default App;
