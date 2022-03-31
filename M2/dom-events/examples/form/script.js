const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submitted');

  const author = event.target.author.value;
  const isbn = document.querySelector('#isbn');

  const genres = event.target.genres;

  const isComedy = document.querySelector('#comedy').checked;

  if (isComedy) {
    event.target.author.style.textDecoration = 'line-through';
  } else {
    event.target.author.style.textDecoration = 'none';
  }

  console.log(author, isbn, genres, isComedy);
});
