const getLocalStorage = () => {
  const getRecipe = localStorage.getItem('favoriteRecipes');
  if (getRecipe) {
    const favoriteRecipes = JSON.parse(getRecipe);
    console.log(favoriteRecipes);
    return favoriteRecipes;
  }
};

export default getLocalStorage;
