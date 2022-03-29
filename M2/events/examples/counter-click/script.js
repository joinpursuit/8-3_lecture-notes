let count = 0;
const span = document.querySelector('h1 span');
const paragraph = document.querySelector('p');
paragraph.addEventListener('click', () => {
  count++;
  span.textContent = count;
});
