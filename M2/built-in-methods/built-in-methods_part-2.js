/**
 * REVIEW ACTIVITY - Part 1
 *
 * Generating random numbers is a very common task when implementing algorithms.
 * This comes up frequently in technical interviews as part of a larger problem.
 * Being able to generate random numbers in a given range is a great tool to have in your tool belt!
 *
 * @returns {Number} - a random decimal number between 30 and 70
 */
function randomDecimal30To70() {
  let rand = Math.random();
  rand = rand * 40; // stretch by the width of the interval

  // now we have a random number between 0 and 40.

  rand = rand + 30; // shift by 30

  // now we have a random num between 30 and 70!
  return rand;
}

// What does multiplication do to the interval?
//    ->

// for (let i = 0; i < 10; i += 1) {
//   console.log(randomDecimal30To70());
// }

/**
 * REVIEW ACTIVITY - Part 2
 *
 * This time, generate a random INTEGER.
 * This task is important for selecting random elements of an array.
 *
 * Ask yourself: can your algorithm ever return the number 30? How about the number 70? How do you know?
 *
 * @returns {Integer} - a random integer between 30 and 70
 */
function randomInteger30To70() {}

/**
 * ACTIVITY 1
 *
 * Write a function that checks if an object has a given key.
 * Try to solve this problem as many ways as possible - aim for 2-3 different approaches!
 *
 * As you work on this problem, you should use goolge and/or MDN to research built in methods and JavaScript features that can help solve this problem.
 *
 * When you have completed 2 or 3 implementations that use different methods, write down your thoughts on the following question
 * (You may have to do more research to answer this!)
 *
 * - Will each function behave the same way with the same inputs? Can you come up with arguments to pass your functions that will result in different outputs?
 *
 * @param {Object} obj
 * @param {String} key
 * @returns {Boolean}
 **/
function isKeyInObject1(obj, key) {}

function isKeyInObject2(obj, key) {}

function isKeyInObject3(obj, key) {}

let exampleObject = {
  timesIveBeenToBrazil: 0,
  olderThan60: false,
};

/**
 * ACTIVITY 2
 *
 * JavaScript provides us with many options for how to iterate through an object.
 * You may be able to solve this problem using any (or some combination) of the following:
 *
 * 1. for... in loop
 * 2. for... of loop
 * 3. Looping through Object.values()
 * 4. Looping through Object.keys()
 * 5. Looping through Object.entries()
 *
 * @param {Object} roles - maps role titles to salary
 * @returns {String} - name of the highest paid role
 *
 */
function highestSalary(roles) {
  let roleName = "";
  let roleSalary = 0;

  console.log("keys:", Object.keys(roles));
  console.log("values:", Object.values(roles));
  console.log("entries:", Object.entries(roles));

  let entries = Object.entries(roles);
  for (let entry of entries) {
    console.log(entry[0]);
  }

  // for (let value of roles) {
  //   console.log(value);
  // }

  return roleName;
}

let exampleRoles = {
  juniorDev: 90000,
  seniorDev: 160000,
  engineeringManager: 200000,
};

highestSalary(exampleRoles);

/**
 * RESEARCH ACTIVITY
 *
 * Research and write down brief answers to the following questions:
 *
 * - What is the difference between a for... in loop and a for... of loop?
 * - Object.values() returns an array. What data type is each element of this array? Which built-in method can you use to check?
 * - What are some problems you might experience trying to use Object.values() to solve the previous problem?
 *
 */
