const increment = document.querySelector('.increment');
increment.addEventListener('click', () => {
  const hearts = document.querySelector('.hearts');
  hearts.textContent += '❤';
});

const decrement = document.querySelector('.decrement');
decrement.addEventListener('click', () => {
  const hearts = document.querySelector('.hearts');
  hearts.textContent = hearts.textContent.slice(0, -1);
});
