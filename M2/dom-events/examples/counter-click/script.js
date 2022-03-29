const span = document.querySelector('h1 span');
// review accessing an elemen by tag
const clickMeP = document.querySelector('p');

// verifying we've accessed the correct tag
console.log(clickMeP.textContent);

const increment = (count) => {
  return count + 1;
};

// use an event listener to create a behavior for clicking the tag
clickMeP.addEventListener('click', () => {
  console.log("i've been clicked!!");
  // how can I add to the click count?
  // we parse the string content as a integer
  let count = parseInt(span.textContent);
  // incremen the count
  count = increment(count);
  // convert the integer count back to string
  const spanCount = count.toString();
  // update the span value
  span.textContent = spanCount;
});
