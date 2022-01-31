// pesquisa por nome inteiro
export async function getMealByName(value) {
  try {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// pesquisa comidas usando primeira letra
export async function getMealByLetter(lett) {
  try {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${lett}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna todas as categorias de comida
export async function getCategories() {
  try {
    const response = await fetch('www.themealdb.com/api/json/v1/1/categories.php');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// retorna prato aleatorio
export async function getRandomMeal() {
  try {
    const response = await fetch('www.themealdb.com/api/json/v1/1/random.php');
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

// retorna foto do prato
// export async function getPics(ingrediente) {
//   try {
//     const photo = await fetch(`https://www.themealdb.com/images/ingredients/${ingrediente}.png`);
//     return photo;
//   } catch (error) {
//     console.error(error);
//   }
// }
