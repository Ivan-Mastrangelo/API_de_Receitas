const getLocalStorage = (param) => {
  const getRecipe = localStorage.getItem(param);
  if (getRecipe) {
    const favoriteRecipes = JSON.parse(getRecipe);
    console.log(favoriteRecipes);
    return favoriteRecipes;
  }
};

export default getLocalStorage;
