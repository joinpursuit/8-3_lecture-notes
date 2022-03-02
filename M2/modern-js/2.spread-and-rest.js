/**
 * 1. "Rest" and "spread" share the same syntax. What is that syntax? Write a brief resposne below.
 */

/**
 * 2. Is the code below an example of the "rest" or "spread" syntax? How do you know? Write a brief response.
 */
const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
const [first, ...others] = astronauts;

/**
 * 3. Is the code below an example of the "rest" or "spread" syntax? How do you know? Write a brief response.
 */
const beforeEarth = ["Mercury", "Venus"];
const afterEarth = ["Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const allPlanets = [...beforeEarth, "Earth", ...afterEarth];

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
