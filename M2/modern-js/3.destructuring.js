/**
 * 1. What is destructuring? Write a brief response below.
 */

// unpacking individual parts of an object or array
// kind of the inverse of object shorthand


/**
 * 2. Use destructuring to create three new variables from the following array.
 */
const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
const[astro1, astro2, astro3] = astronauts;

console.log(typeof astro3)

// You can tell we are using a destructuring when there is a [] or a {} on the lhs of an =
/**
 * 3. Use destructuring to create three new variables that represent each key-value pair in the following object.
 */
const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};

const {occupation } = astronaut
console.log(occupation);

/**
 * 4. What are some benefits of using destructuring? Are there any limitations? Write a brief response below.
 */

/**
 * 5. Apply destructuring to the following function.
 */
function getAstronautActivityStatus(astronaut) {
  let result = "";
  if (astronaut.isActive) {
    result = `${astronaut.name} is active.`;
  } else {
    result = `${astronaut.name} is not active.`;
  }
  return result;
}

// const astronaut = {
//   name: "Jessica Watkins",
//   isActive: true,
//   occupation: "Geologist",
//};
getAstronautActivityStatus(astronaut); //> "Jessica Watkins is active."
