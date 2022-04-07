console.log("hello from javascript!");

const API_BASE = "https://dog.ceo/api/";

const newDogBtn = document.querySelector("button");
const dogImg = document.querySelector("img");
const main = document.querySelector("main");

console.log("dog button", newDogBtn);
console.log("img", dogImg);
console.log("main", main);

// fetch(`${API_BASE}breeds/image/random`) :: Promise<Response>
fetch(`${API_BASE}breeds/image/random`).then((response) => {
  console.log(response.headers);
  const json = response.json();
  console.log(json);
  return json;
});
