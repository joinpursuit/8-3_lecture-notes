/*
  This code enables all the inital li elements to create a new li when clicked. However, the new li elements do not have the same capability.
*/
// accessing all the li in the html
const lis = document.querySelectorAll('li');

const generateLiHandler = () => {
  // access the order list
  const ol = document.querySelector('ol');
  // create a new list item
  const newLi = document.createElement('li');
  // add new text to the new list item
  newLi.textContent = 'Click me to make more!';
  // add an event listener to the new list item!
  newLi.addEventListener('click', generateLiHandler);
  // append the new list item to the ordered list
  ol.append(newLi);
};

// loop through the li
for (let li of lis) {
  li.addEventListener('click', generateLiHandler);
}
