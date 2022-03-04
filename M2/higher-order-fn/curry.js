/**
 * We've talked a bunch about how to describe data types in jsdoc comments. For example:
 *
 * - Number[] means an array of numbers
 * - Object[] means an array of object
 *
 * Sometimes, it's nice to distinguish between functions based on the data types of their arguments, and the data type of their return values.
 *
 * Consider the function add, which adds two numbers:
 */
const add = (a, b) => a + b;

add(1, 4); // 5

/**
 * We could describe the "data type" or "function signature" of add as Number x Number -> Number
 *
 * On the left side of the arrow, we list the data types of each argument, separated with an "x".
 * On the right side of the arrow, we give the data type of the return value.
 *
 * The function repeat has the signature: Number x String -> String
 */
const repeat = (n, str) => {
  return str.repeat(n);
};

repeat(3, "hi"); // "hihihi"

/**
 * Using the concept of higher order functions, we could re-write the function add so that it only accepts one argument at a time.
 *
 */
const addVersion2 = (a) => {
  return (b) => a + b;
};
add(2)(5); // 7
add(3); // a function with signature Number -> Number that accepts any number and adds 3 to it.

/**
 * Challenge: complete the curry funtion below. It transforms a function with two arguments (like add) into a function that takes one argument at a time (like addVersion2).
 *
 * @param {A x B -> C} fn
 * @returns {A -> (B -> C)}
 */
const curry = (fn) => {};

const curriedAdd = curry(add);
add(1, 4); // 5
curriedAdd(1)(4); // 5
curriedAdd(1); // A function with signature Number -> Number that adds 1 to any input number
