const span = document.querySelector('h1 span');
// review accessing an elemen by tag
const clickMeP = document.querySelector('p');

// verifying we've accessed the correct tag
console.log(clickMeP.textContent);

const incrementTextContent = () => {
  console.log("i've been clicked!!");
  // how can I add to the click count?
  // we parse the string text content as a integer
  let count = parseInt(span.textContent);
  // increment the count
  count++;
  // convert the integer count back to string
  const countText = count.toString();
  // update the span value
  span.textContent = countText;
};

// use an event listener to create a behavior for clicking the tag
clickMeP.addEventListener('click', incrementTextContent);
