/** 7 PRIMITIVE TYPES <-- cannot ever updated (immutable)
 * To share their values, JS passes copies
 *
 * number
 * undefined
 * boolean
 * string
 * null
 *
 * Bigint
 * Symbol
 *
 */

/**
 * This is an example of "pass by value"
 * since primitives can only be copied
 * not updated
 */
let myHorsey = "jemima";
let yourHorsey = myHorsey;
myHorsey = "puddleduck";
yourHorsey = myHorsey;
myHorsey = "stewart little";
console.log(myHorsey, yourHorsey);

/**
 * Since primitive data types are immutable,
 * So their methods are non-destructive (makes a copy)
 */
let title = "title";
title = title.toUpperCase();

console.log(title);

/** REFERENCE TYPES <-- CAN BE updated (mutable)
 * To share their values, JS passes references
 * to the original value
 *
 * Unique instances of Reference type
 * despite having identical stored values, are not equal
 *
 * Any type that is not primitive (the 7 above), is a reference type
 *
 * Array
 * Objects
 *
 */

/**
 * This is an example of "pass by reference"
 * since reference types are shared by passing
 * a reference to the original value
 *
 */

const myGarden = {
  edible: ["collards", "kale", "potatoes"],
  decorative: ["evergreen tree", "hydrangeas", "pine tree", "peace lilies"],
  length: 14,
  width: 15,
};

const haleysGarden = myGarden;

myGarden.edible = ["snap peas", "strawberries", "wheat"];

console.log(myGarden, haleysGarden);

const trevorsGarden = {
  edible: ["collards", "kale", "potatoes"],
  decorative: ["evergreen tree", "hydrangeas", "pine tree", "peace lilies"],
  length: 14,
  width: 15,
};

console.log(myGarden === haleysGarden); // true because they reference the same instance
console.log(myGarden === trevorsGarden); // false because they reference different instances

/**
 * An example of the fact that two variables
 * reference the same object
 */

const videoGames = {
  description: "playing video games",
};
const reading = videoGames;
reading.description = "reading";

console.log(videoGames, reading);
console.log(videoGames === reading);

/**
 * Since reference data types are mutable,
 * Some of their methods can be destructive (updates the ref),
 * others can be non-destructive (make a copy)
 */

// DESTRUCTIVE METHODS
// .push()
let animals = ["lion", "bumblebee", "shark"];
animals.push("orca");
console.log(animals); //[ 'lion', 'bumblebee', 'shark', 'orca' ]

//.pop()
animals.pop();
console.log(animals); //[ 'lion', 'bumblebee', 'shark']

//.shift()

//.unshift()

//.splice()

// delete object method
const fridge = {
  milk: "oat",
  cheese: "cheddar",
};

delete fridge.cheese;

console.log(fridge);

// NON-DESTRUCTIVE METHOD
//.concat() <-- purpose is to create a new array combining other arrays

let mammals = ["squirrel", "rhino"];
let zoo = animals.concat(mammals);
console.log(animals);
console.log(zoo);

//.slice()
