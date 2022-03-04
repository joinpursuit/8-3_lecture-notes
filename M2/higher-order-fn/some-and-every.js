/**
 * INTRO
 *
 * In the following activities, we will try to answer a few questions about the following array of integers:
 */

let exampleNums = [15, 9, 49, 51, 27, 17];

/**
 * Along the way, we will see some examples of how you could use JavaScript to help answer those questions.
 * Our main goal is to write code that is more REUSABLE, so that it could help us answer similar questions we might come up with in the future.
 */

/**
 * 1. REVIEW: FUNCTION PARAMETERS
 *
 *
 * Consider the following two JavaScript functions.
 * Each function helps us answer the question: Is there any element of exampleNums that is odd?
 */

console.log("\n############# 1. REVIEW: FUNCTION PARAMETERS #############\n");

// Version 1
const hasOddElemVersion1 = () => {
  for (let n of exampleNums) {
    if (n % 2 === 1) {
      return true;
    }
  }
  return false;
};

console.log("VERSION 1: exampleNums has an odd element:", hasOddElemVersion1());

// Version 2
const hasOddElemVersion2 = (nums) => {
  for (let n of nums) {
    if (n % 2 === 1) {
      return true;
    }
  }
  return false;
};

console.log(
  "VERSION 2: exampleNums has an odd element:",
  hasOddElemVersion2(exampleNums)
);

/**
 * 1A. Which version of hasOddElem is more reusable? Why? Write a brief response below.
 *       -> Hint: If you had to answer the question "Is there any element of the array [10, 20, 30, 40] that is odd?" which version of the code would be more useful? Why?
 */

console.log(
  "[10, 20, 30, 40] has an odd element:",
  hasOddElemVersion2([10, 20, 30, 40])
);

/*

  Version 2: more reusable since it has a parameter.

  version 2 helps answer a broader range of questions: Is there any element of <SOME ARRAY OF NUMBERS> that is odd?

  Function parameters provide you with more flexibility!

*/

/**
 * ##################################
 * ##################################
 * ##################################
 */

/**
 * 2. KEEPING CODE DRY
 *
 * Here are a few more questions we could ask about arrays of numbers:
 *
 * A. Is there any element of <SOME ARRAY OF NUMBERS> that is odd?
 * B. Is there any element of <SOME ARRAY OF NUMBERS> that is even?
 * C. Is there any element of <SOME ARRAY OF NUMBERS> that is larger than 50?
 *
 * The code below helps answer these questions.
 */

console.log("\n############# 2. KEEPING CODE DRY #############\n");

const hasOddElem = (nums) => {
  for (let n of nums) {
    if (n % 2 === 1) {
      return true;
    }
  }
  return false;
};

console.log("exampleNums has an odd element:", hasOddElem(exampleNums));

const hasEvenElem = (nums) => {
  for (let n of nums) {
    if (n % 2 === 0) {
      return true;
    }
  }
  return false;
};

console.log("exampleNums has an even element:", hasEvenElem(exampleNums));

const hasElemLargerThan50 = (nums) => {
  for (let n of nums) {
    if (n > 50) {
      return true;
    }
  }
  return false;
};

console.log(
  "exampleNums has an element larger than 50:",
  hasElemLargerThan50(exampleNums)
);

/**
 * 2A. What similarities do you see in each of these functions? How is each function different? Write a brief response.
 */

/*
  The ONLY difference is which condition we are searching for in the IF statement.

  otherwise, these functions are structurally identical.

  WHY are they so similar?
     Because each function is trying to answer a really similar question
*/

/**
 * ##################################
 * ##################################
 * ##################################
 */

/**
 * 3. CALLBACKS
 *
 * Each of the questions in part two is of the form: "Is there any element of <SOME ARRAY OF NUMBERS> that <PASSES SOME TEST>?"
 * Can we write a single function that can help us answer any question that fits this format?
 *
 * Spoiler: the answer is YES. We will need to introduce a second parameter that represents a test we want to run on each element of the array.
 */

console.log("\n############# 3. CALLBACKS #############\n");

const some = (nums, test) => {
  for (let n of nums) {
    if (test(n)) {
      return true;
    }
  }
  return false;
};

/**
 * Let's use some() to answer the question: Is there any element of exampleNums that is odd?
 */

const isOdd = (n) => n % 2 === 1;
console.log("exampleNums has an odd element:", some(exampleNums, isOdd));

/**
 * 3A. Your turn! Use some() to answer the question: Is there any element of exampleNums that is even?
 */

console.log(
  "exampleNums has an even element:",
  some(exampleNums, (n) => n % 2 === 0)
);

/**
 * 3B. Use some() to answer the question: Is there any element of exampleNums that is larger than 50?
 */

console.log(
  "exampleNums has an element that is larger than 50:",
  some(exampleNums, (n) => n > 50)
);

// Does [1,2,3,4,5] have an element less than -1 OR does [1,2,3,4,5] have an element greater than 4?

console.log(
  "any element less than -1 OR does it have an element greater than 4?",
  some([1, 2, 3, 4, 5], (n) => n < -1) || some([1, 2, 3, 4, 5], (n) => n > 4)
);

// Does [1,2,3,4,5] have an element that is (either less than -1 or greater than 4)?
console.log(
  " Does [1,2,3,4,5] have an element that is (either less than -1 or greater than 4)?",
  some([1, 2, 3, 4, 5], (n) => n < -1 || n > 4)
);

/**
 * ##################################
 * ##################################
 * ##################################
 */

/**
 * 4. everyElementBelow50
 *
 * Write a function that can help us answer the question: "Is every element of <SOME ARRAY OF NUBMERS> below 50?"
 *
 * @param {Array}
 * @returns {Boolean} - true if all numbers in input array are less than 50
 */
console.log("\n############# 4. everyElementBelow50 #############\n");

const everyElementBelow50 = (nums) => {
  for (let n of nums) {
    console.log("checking if", n, "is less than 50");
    if (!(n < 50)) {
      return false;
    }
  }
  return true;
};

console.log(
  "Every element of exampleNums is below 50:",
  everyElementBelow50(exampleNums) // false
);

console.log(
  "Every element of [1,2,3,49] is below 50:",
  everyElementBelow50([1, 2, 3, 49]) // true
);
/**
 * ##################################
 * ##################################
 * ##################################
 */

/**
 * 5. EVERY
 *
 * Now we'll write a more abstract function:
 * every() helps us answer any question of the form: "Does every element of <SOME ARRAY OF NUMBERS> <PASS SOME TEST>?"
 *
 * @param {Array} array
 * @param {Function} test - a function that accepts a single array element and returns true or false.
 * @returns {Boolean} - tells us if every element of the input array passes the input test
 */
console.log("\n############# 5. EVERY #############\n");

// For each element of the array:
// check if the passes the test
//   -> if it does, continue
//   -> if it doesn't,
// If we make it through all of our array, the answer is TRUE
const every = (array, test) => {
  for (let n of array) {
    if (test(n)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log("Every element of exampleNums is odd:", every(exampleNums, isOdd));
console.log(
  "Every element of exampleNums is even:",
  every(exampleNums, (n) => n % 2 === 0)
);
console.log(
  "Every element of exampleNums is below 50:",
  every(exampleNums, (n) => n < 50)
);

exampleNums.every((n) => n < 50);
exampleNums.some((n) => n < 50);
