/**
 * createLineOrder()
 * ---------------------
 * An airline wants to build an application that improves the boarding process for its customers. They want to have customers sign up in order of arrival, but prioritize those customers who have a membership.
 * 
 * Build an algorithm that takes in an array of objects, where each object represents a person. The order of the array is important; the person at index `0` arrived first while the person at index `1` arrived afterwards.
 * 
 * Return an array that includes only the names of each person, but reordered to account for whether or not each person has a membership. Everyone who has a membership should be at the front of the line in the same order they arrived. Everyone without a membership should be in the same order they arrived but after those with a membership.
 * @param {Object[]} people - An array of people objects.
 * @param {string} people[].name - The name of the person.
 * @param {boolean} people[].hasMembership - Whether or not the person has a membership.
 * @returns {string[]} An array of names, in order depending on the person's order in the original array and the person's priority.
 * 
 * EXAMPLE:
 *  const people = [
      { name: "Wade Carson", hasMembership: false },
      { name: "Ray Anderson", hasMembership: true },
      { name: "America Marsh", hasMembership: true },
      { name: "Patience Patel", hasMembership: false },
    ];
    createLineOrder(people);
    //> [ "Ray Anderson", "America Marsh", "Wade Carson", "Patience Patel" ]
 */
function createLineOrder(people) {
  const members = getMembersLine(people);
  const nonMembers = getNonMembersLine(people);

  const everybody = [];
  everybody.push(members);
  everybody.push(nonMembers);

  return everybody;
}

// 1. Make an array for the members
// 2. Make an array for the non-members
// 3. make an array for everybody
// iterate through the members, pushing each into our everybody array
// iterate through the non-members, pushing each into our everybody array

function getMembersLine(people) {
  // option 2: make a new array, iterate through people pushing only the members
  let members = [];
  for (let i = 0; i < people.length; i += 1) {
    if (people[i].hasMembership) {
      members.push(people[i].name);
    }
  }
  return members;
}
function getNonMembersLine(people) {}

const people = [
  { name: "Wade Carson", hasMembership: false },
  { name: "Ray Anderson", hasMembership: true },
  { name: "America Marsh", hasMembership: true },
  { name: "Patience Patel", hasMembership: false },
];

console.log("test getMembers:", getMembersLine(people)); // ["Ray Anderson", "America"];

// console.log("test case 1:", createLineOrder(people));
// // ["Ray Anderson", "America Marsh", "Wade Carson", "Patience Patel"]

// console.log(
//   "test case 2:",
//   createLineOrder([{ name: "Juan", hasMembership: true }])
// );
// // ["Juan"]

// console.log("test case 3:", createLineOrder([]));
// []

// 1. Understand the problem
//    A. Key terms:
//          Array
//          .hasMembership property is going to be important. It's a boolean.
//          Order/indeces are important because they represent the order people showed up in line.
//         person: object with .name and .hasMembership properties
//         people: an array of people objects
//    B. Function inputs
//         people
//    C. Function output
//         The line order :: string[], an array of names, not an array of people objects
//    D. Clarifying Questions
//          Should we check to make sure the input is really an array of people?
//            // nah let's not  worry about it
//          Will we have to format the names in any special way?
//            // nah let's just use the names as provided in each person object
//          Are there multiple types of memberships or priority levels? Or just member vs. non-member
//            // When we reflect, it's a great idea to talk about how we could support multiple membership levels. We won't worry about it for now.
//    E. Write your own test: check!

// 2. Devise a plan
//   A. Let's write some pseudo code! Sometimes it's helpful to write pseudo code for more than one approach.

// 1. Make an array for the members
// 2. Make an array for the non-members
// 3. make an array for everybody
// iterate through the members, pushing each into our everybody array
// iterate through the non-members, pushing each into our everybody array

// 3. Solve it (Implement our solution with code!)
//   A. Run code frequently along the way! Use console.log and the debugger to investigate your code.

// 4. Reflect
//   A. Is our code working? How do we know?
//   B. Brainstorm ways we could improve our code. Can we make it more efficient? Can we make it more readable?
