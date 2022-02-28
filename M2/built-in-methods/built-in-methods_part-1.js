let arr1 = [];
let arr2 = [];
// console.log(typeof arr1, typeof arr2);

// console.log(arr1, arr2);

// console.log(arr1 === arr2);

var arr3 = [1, 2, 3];

// spread operator
var max1 = Math.max(...arr3);
var max2 = Math.max(arr3);

// console.log(max1);
// console.log(max2);

// converting non-number types into number
// value's equivalent is the result
// in this case NaN
// console.log(Math.max(Number(arr3)));

/**
 * In your small group, discuss possible answers to the following questions. Use your internet research skills to find and make a note of the HOW/WHERE you sourced your information, and WHY you trust it.
 *
 * What built-in method(s) do you think would help with the following problem?
 * Given an array of integers where some numbers are strings, return the largest integer as a number.
 * e.g. [4, "10", 9]
 */

let arr6 = [4, '10', 9];

function findMax(arr) {
  // Array.map we could use to loop through the arr
  // let's use for of for now
  for (let i = 0; i < arr.length; i++) {
    // Number.isNan to filter out non-numbers using a conditional
    if (!Number.isNaN(arr[i]) && typeof arr[i] === 'string') {
      // Number.parseInt() to convert str to numbers and reassign element
      arr[i] = Number.parseInt(arr[i]);
    }
  }

  // Math.max() may be useful
  return Math.max(...arr);
}

// should return 10
// console.log(findMax(arr6));

function loopThrough(arr) {
  // this is an example of a validation
  if (Array.isArray(arr)) {
    for (let e of arr) {
      console.log(e);
    }
  } else {
    console.log(`${arr} is not iterable`);
  }

  return arr;
}

let arr4 = [1, 32, 2, 3, 12, 3, 2, 3, 34, 2, 1, 1, 3, 3];
let str = 787878;

// console.log(loopThrough(arr4));

// console.log(loopThrough(str));

/**
 * ACTIVITIES
 *
 * SOLO ACTIVITY 1
 *
 * Write down in your own words what a "built-in method" is.
 *
 * Documentation can sometimes be difficult to read, but is essential to your success as a developer.
 *    Take a look at the page from the Mozilla Developer Network that describes the Math.max() method.
 *    Then, write down in your own words what the Math.max() method does.
 *    Hint: Google search for "MDN Math.max()"
 *
 * ------------------------------------------------------------
 *
 * GROUP ACTIVITY 1
 *
 * In your small group, research the following questions online and discuss the answers you find. Take note specially of HOW and WHERE you got the information, and WHY you trust it.
 *
 * Why is the Number.isNaN() method helpful?
 * Why is the Array.isArray() method helpful?
 * What does the Math.random() method do?
 *
 * ------------------------------------------------------------
 *
 * SOLO ACTIVITY 2
 *
 * On your own group, use your internet search skills to find the answers if you need to.
 *
 * How can you return a random number between 0 and 9?
 * How can you return a random number between 0 and 99?
 * How can you return a random number between 1 and 100?
 * How can you return a random number between 1 and 50?
 * How can you return a random number between 10 and 20?
 *
 * ------------------------------------------------------------
 *
 * GROUP ACTIVITY 2
 * In your small group, discuss possible answers to the following questions. Use your internet research skills to find and make a note of the HOW/WHERE you sourced your information, and WHY you trust it.
 *
 * What built-in method(s) do you think would help with the following problems?
 *
 *
 * Given an array of integers where some numbers are strings, return the largest integer as a number.
 * e.g. [4, "10", 9]
 *
 * Given an object, verify that none of the values of those keys are NaN.
 * e.g. { inStock: 11, maximum: 20 }
 *
 * Given an object with a number of keys, choose a key at random and return the value of that key.
 * e.g. { firstName: "Francisco", lastName: "Carrillo", age: 28 }
 *
 * ------------------------------------------------------------
 */
