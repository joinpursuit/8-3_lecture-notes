console.log('script is running');
const BASE_URL = 'https://ghibliapi.herokuapp.com/films';
let id = '2baf70d1-42bb-4437-b551-e5fed5a87abe';

// error handling function
const displayError = (e) => {
  console.log(e);
  // render some text to the browser that tells the user there's been an error
};

// call the fetch function with BASE_URL as a arg
fetch(BASE_URL + '/' + id)
  // process the response body
  .then((response) => {
    console.log(response);
    if (response.status !== 200) {
      throw new Error('failed to get data');
    }
    return response.json();
  })
  // process the response body as json
  .then((json) => {
    // console.log(json);
    // pass the json data to a function that can render the data
    return json;
  })
  // process errors
  // .catch((e) => {
  //   // pass the error data to a function that can render the data
  //   console.log(e);
  //   return e;
  // });
  .catch(displayError);
