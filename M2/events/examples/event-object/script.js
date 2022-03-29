const heading = document.querySelector("h1");
heading.addEventListener("click", (event) => {
  console.log("event.type:", event.type);
  console.log("event.target.textContent:", event.target.textContent);
});