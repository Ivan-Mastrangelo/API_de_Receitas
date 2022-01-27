// pesquisa por nome inteiro
export async function getMealByName(e) {
  try {
    const response = await fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// pesquisa bebidas usando primeira letra
export async function getMealByLetter(lett) {
  try {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${lett}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna todas as categorias de bebidas
export async function getCategories() {
  try {
    const response = await fetch('www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna drink aleatorio
export async function getRandomDrink() {
  try {
    const response = await fetch('www.thecocktaildb.com/api/json/v1/1/random.php');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
