// pesquisa por nome inteiro
export async function getMealByName(value) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// pesquisa comidas usando primeira letra
export async function getMealByLetter(lett) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${lett}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna comidas por ingrediente
export async function getMealByIngredient(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna todas as categorias de comida
export async function getMealCategories() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna prato aleatorio
export async function getRandomMeal() {
  try {
    const response = await fetch('www.themealdb.com/api/json/v1/1/random.php'); // modificar url;(https)
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// Retorna todas as receitas de comidas
export async function getAllMeal() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// Retorna prato da categoria selecionada
export async function getMealByCategory(param) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// Retorna receita pelo id
export async function getMealById(id) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna foto do prato
// export async function getPics(ingrediente) {
//   try {
//     const photo = await fetch(`https://www.themealdb.com/images/ingredients/${ingrediente}.png`);
//     return photo;
//   } catch (error) {
//     console.error(error);
//   }
// }
