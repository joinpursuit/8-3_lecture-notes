/*
  This code enables all the inital li elements to create a new li when clicked. However, the new li elements do not have the same capability.
*/
const lis = document.querySelectorAll('li');
for (let li of lis) {
  li.addEventListener('click', () => {
    const ol = document.querySelector('ol');
    const newLi = document.createElement('li');
    newLi.textContent = 'Click me to make more!';
    ol.append(newLi);
  });
}
