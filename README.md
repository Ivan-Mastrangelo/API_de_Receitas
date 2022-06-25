# Sobre

Este projeto fez parte da avaliação do curso de Desenvolvimento Web, módulo de Frontend da escola Trybe. Foi desenvolvido em grupo, junto comigo estiveram Luiz Ricardo Fernandes, Renan Souza e João Marcelo Silva. 
Por se tratar de um trabalho em grupo que visava comprovar que dominavamos as competências ensinadas até o ponto determinado do curso e pelo faqto de que durante sua execução ainda havia um projeto individual a ser entregue por cada integrante do grupo, ao atingirmos a meta o projeto ficou incompleto. Quis trezê-lo para o meu github para concluí-lo assim que for possível. 
Um ponto interessante na realização do projeto foi a utilização de metodologia ágil, com uso de daily meetings, do Trello como ferramenta kanban e o uso do github para a inserção e o compartilhamento do código.

## Habilidades desenvolvidas e avaliadas

  - Utilizar a Context API do _React_ para gerenciar estado
  - Utilizar o _React Hook useState_
  - Utilizar o _React Hook useContext_
  - Utilizar o _React Hook useEffect_
  - Criar Hooks customizados

## O que foi desenvolvido

Um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

Nele deve ser possível ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks!

A base de dados vêm de duas APIs distintas, uma para comidas e outra para bebidas.

O layout tem como foco dispositivos móveis, então todos os protótipos devem estar desenvolvidos para telas menores.

### APIs

#### TheMealDB API

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade TheMealDB API, com receitas e ingredientes de todo o mundo.
    Os end-points são bastante ricos e podem ser conferidos aqui: (https://www.themealdb.com/api.php).
    As fotos dos ingredientes vêm de um end-point padronizado com a seguinte lógica:

```
// exemplo com "Lime"
https://www.themealdb.com/images/ingredients/Lime.png
```

#### The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade, a TheMealDB API), só que focado em bebidas.
    Os end-points também são bastante ricos: (https://www.thecocktaildb.com/api.php)

### Organização

O App está organizados por telas e por rotas da seguinte forma:

* Tela de login: `/`;
* Tela principal de receitas de comidas: `/foods`;
* Tela principal de receitas de bebidas: `/drinks`;
* Tela de detalhes de uma receita de comida: `/foods/{id-da-receita}`;
* Tela de detalhes de uma receita de bebida: `/drinks/{id-da-receita}`;
* Tela de receita em progresso de comida: `/foods/{id-da-receita}/in-progress`;
* Tela de receita em progresso de bebida: `/drinks/{id-da-receita}/in-progress`;
* Tela de explorar: `/explore`;
* Tela de explorar comidas: `/explore/foods`;
* Tela de explorar bebidas: `/explore/drinks`;
* Tela de explorar comidas por ingrediente: `/explore/foods/ingredients`;
* Tela de explorar bebidas por ingrediente: `/explore/drinks/ingredients`;
* Tela de explorar comidas por nacionalidade: `/explore/foods/nationalities`;
* Tela de perfil: `/profile`;
* Tela de receitas feitas: `/done-recipes`;
* Tela de receitas favoritas: `/favorite-recipes`.

As telas sofrem variações dependendo do tipo da receita (se é comida ou bebida, no caso).

#### localStorage

O uso de `localStorage` foi necessário para a persistência das informações, utilizando os valores salvos para reiniciar o ContextAPI, caso a pessoa atualize a página.

#### Ícones

Os ícones utilizados na aplicação foram disponibilizados pela escola e estão no diretório `src/image/`. 

Os ícones são:

* `profileIcon.svg`;
* `searchIcon.svg`;
* `drinkIcon.svg`;
* `exploreIcon.svg`;
* `mealIcon.svg`;
* `shareIcon.svg`;
* `whiteHeartIcon.svg`;
* `blackHeartIcon.svg`;

#### Bibliotecas

Nos componentes que contêm a funcionalidade de favoritar pratos ou bebidas, foi utilizada a biblioteca `clipboard-copy` para copiar as informações das receitas. Essa biblioteca já veio instalada no projeto, pela escola.

Para implementar estilizações no app, a escola disponibilizou a lib `Bootstrap`, ela também já vem instalada no projeto.

### Para executá-lo localmente

Basta clonar o projeto:
```
git@github.com:Ivan-Mastrangelo/API_de_Receitas.git
```
Entrar no diretório criado:
```
  cd API_de_Receitas.git
  ```
Instalar as dependências do projeto:
```
  npm install
  ```
E iniciar o servidor:
```
  npm run start
  ```
Após esses comandos, acesse no navegador:
```
  http://localhost:3000/
  ```
---