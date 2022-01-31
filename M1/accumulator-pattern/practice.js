/*
  SUM ALL NUMBERS
  ---------------
  Write a function that sums all numbers in an array.
*/
function sumAllNumbers(numbers) {}

console.log(sumAllNumbers([10, 20, 30])); //> 60
console.log(sumAllNumbers([10 - 10])); //> 0
console.log(sumAllNumbers([])); //> 0

/*
  PRESENT ALL STATES
  ---------------
  Write a function that adds all of the states below to a string. The string should be prefixed with "STATES: " and all states should be separated by a comma and a space.

  If there are no states, just print "STATES: ".
*/
function presentAllStates(states) {}

console.log(presentAllStates(["Alaska", "New York", "Florida"]));
//> "STATES: Alaska, New York, Florida, "
console.log(presentAllStates([]));
//> "STATES: "

/*
  HAS SPACE
  ---------------
  Write a function that determines whether or not any of the states provided include a space (i.e. " ") in their name.
*/
function hasSpace(states) {}

console.log(hasSpace(["Alaska", "New York", "Florida"])); //> true
console.log(hasSpace(["Alaska", "Montana", "Florida"])); //> false

/*
  IS VALID
  ---------------
  Write a function that returns false if any state abbreviation is longer than two characters.
*/
function isValid(states) {}

console.log(isValid(["AK", "NYC", "FL"])); //> false
console.log(isValid(["AK", "WA", "FL"])); //> true

/*
  FIND
  ---------------
  Write a function that looks for a state by name. If that state is found, return the state name. If it is not found, return `null`.
*/
function find(states, name) {}

console.log(find(["Alaska", "New York", "Florida"], "Alaska")); //> "Alaska"
console.log(find(["Alaska", "New York", "Florida"], "Montana")); //> null
