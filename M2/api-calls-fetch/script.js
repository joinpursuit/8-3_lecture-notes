const BASE_URL = 'https://randomuser.me/api';

// create a function to display dom elements from the api response
const displayUser = ({ results }) => {
  const [person] = results;

  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;
  const { email, picture } = person;

  const section = document.createElement('section');
  section.classList.add('card');

  // display the title, first name, lastname
  const h2 = document.createElement('h2');
  h2.textContent = fullName;

  // display the email
  const p = document.createElement('p');
  p.textContent = email;

  // display the profile photo
  const img = document.createElement('img');
  img.setAttribute('src', picture.large);
  img.setAttribute('alt', fullName);

  // append all the elements to the dom
  section.append(img, h2, p);
  document.querySelector('.people').append(section);
};

// create a function to display errors from the api call
const displayError = (error) => {
  const section = document.querySelector('section.error');
  section.style.display = 'block';

  // add the something went wrong paragraph
  const p = document.createElement('p');
  p.textContent = 'Something went wrong!';

  // add the error content
  const eMsg = document.createElement('p');
  eMsg.textContent = error;

  // append both paragraphs to the section
  section.append(p, eMsg);
};

const button = document.querySelector('button');

console.log(button.textContent);

button.addEventListener('click', () => {
  // clear out the old user data
  const people = document.querySelector('.people');
  people.innerHTML = '';

  // Fetch data from base url using fetch and promises
  fetch(BASE_URL)
    .then((res) => {
      return res.json();
    })
    .then(displayUser)
    .catch(displayError);
});
