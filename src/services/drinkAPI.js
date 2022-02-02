// pesquisa por nome inteiro
export async function getDrinkByName(e) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// pesquisa bebidas usando primeira letra
export async function getDrinkByLetter(lett) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${lett}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// pesquisa bebidas pelo ingrediente
export async function getDrinkByIngredient(ingredient) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna todas as categorias de bebidas
export async function getDrinkCategories() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna drink aleatorio
export async function getRandomDrink() {
  try {
    const response = await fetch('www.thecocktaildb.com/api/json/v1/1/random.php'); // modificar url;(https)
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// Retorna todas as receitas de drinks
export async function getAllDrinks() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// Retorna bebidas da categoria selecionada
export async function getDrinkByCategory(param) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
