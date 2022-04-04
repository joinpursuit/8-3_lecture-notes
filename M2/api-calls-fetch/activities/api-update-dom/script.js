const BASE_URL = 'https://randomuser.me/api';

fetch('')
  .then((response) => response.json())
  .then(displayCard)
  .catch(displayError);

function displayCard({ results }) {
  const [person] = results;
  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;

  const section = document.createElement('section');
  section.classList.add('card');

  const img = document.createElement('img');
  img.setAttribute('src', person.picture.large);
  img.setAttribute('alt', fullName);

  const h2 = document.createElement('h2');
  h2.textContent = fullName;

  const paragraph = document.createElement('p');
  paragraph.textContent = person.email;

  section.append(img, h2, paragraph);
  document.querySelector('.people').append(section);
}

function displayError(error) {
  const section = document.querySelector('section.error');
  section.style.display = 'block';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Something went wrong!';

  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = error;

  section.append(paragraph, errorMessage);
}
