const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { id } = event.target;
  getPokemonByID(id.value);
  id.value = '';
});

function getPokemonByID(id) {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((result) => {
      const pokemon = createPokemonArticle(result);
      document.querySelector('.pokemon').append(pokemon);
    })
    .catch((error) => {
      const message = createErrorMessage(error);
      document.querySelector('main').append(message);
    });
}

function createPokemonArticle(pokemon) {
  const article = document.createElement('article');
  article.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <h2>${pokemon.name} (#${pokemon.order})</h2>
  `;

  return article;
}

function createErrorMessage(message) {
  const section = document.createElement('section');
  section.classList.add('error');
  section.innerHTML = `
    <p>There was an error!</p>
    <p class="message">${message}</p>
  `;

  return section;
}
