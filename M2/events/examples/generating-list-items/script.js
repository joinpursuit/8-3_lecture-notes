/*
  Comment out the code below before commenting in the working code that follows.
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

/*
  Comment in the following code after commenting out the code above for a working version.
*/
// const lis = document.querySelectorAll("li");
// function generateLiHandler () {
//   const ol = document.querySelector("ol");
//   const newLi = document.createElement("li");
//   newLi.textContent = "Click me to make more!";
//   ol.append(newLi);
//   newLi.addEventListener("click", generateLiHandler);
// }

// for (let li of lis) {
//   li.addEventListener("click", generateLiHandler);
// }
