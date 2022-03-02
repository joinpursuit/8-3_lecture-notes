/**
 * 1. "Rest" and "spread" share the same syntax. What is that syntax? Write a brief resposne below.
 */

// They use ...

/**
 * 2. Is the code below an example of the "rest" or "spread" syntax? How do you know? Write a brief response.
 */
const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
const [first, ...others] = astronauts;

console.log(first); // "Jessica Watkins"
console.log(others); // ["Robert Shane", "Nicole Mann"]

/**
 * 3. Is the code below an example of the "rest" or "spread" syntax? How do you know? Write a brief response.
 */
const beforeEarth = ["Mercury", "Venus"];
const afterEarth = ["Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const allPlanets = [...beforeEarth, "Earth", ...afterEarth];

console.log("allPlanets is:", allPlanets);

// If it happens on the left hand side of =, it is a rest
// If it happens on the rhs of =, it is a spread

// If you are creating a variable, it is rest
// If you are referencing an existing variable, it is spread

/**
 * 4. Take a look at the code below. What do you expect will be logged to the console? Write your answer below.
 */
function getPlanetsCount(...planets) {
  let result;

  if (planets.length === 1) {
    result = `There is 1 planet!`;
  } else {
    result = `There are ${planets.length} planets!`;
  }

  return result;
}

const count = getPlanetsCount("Mercury", "Venus", "Earth", "Mars");
console.log(count);

/**
 * 5. What are the benefits of using the rest or spread syntax? Are there any limitations? Write a brief response below.
 */

// shorter code
// dealing with large arrays
// rest operator is helpful to write functions with unknown number of params

const printAll = (...allValues) => {
  for (let value of allValues) {
    console.log(value);
  }
};

printAll(1, 50);
