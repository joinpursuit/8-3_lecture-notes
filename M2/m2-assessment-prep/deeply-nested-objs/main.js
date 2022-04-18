console.log('JS is running in browser!');

const BASE_URL = 'https://wttr.in';
const FORMAT = '?format=j1';
let place = '';

const displayData = (data) => {
  console.log(`Data: ${data}`);
};

//
const displayError = (e) => {
  console.log(`Error: ${e}`);
};

fetch(`${BASE_URL}/${(place = 'Madrid')}${FORMAT}`) // making the API request
  .then((response) => response.json()) // extracting json
  .then(displayData) // using a helper to process the data
  .catch(displayError); // using a helper to process the error
