let count = 0;
const span = document.querySelector('h1 span');
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', () => {
    count++;
    span.textContent = count;
  });
}
