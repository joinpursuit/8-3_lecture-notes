// Recall what you previously learned about the request-response cycle. Related to that, what is a client?
// What creates/sends a request, for example a browser, local machine, software that request data from server
// How is a client different than a server?
// If a client sends requests...a server responds
// a server SERVES data
// What is a web API?
// Application Program Interface
// App is a program, is a connected set of code/logic that
// produces some logical behavior
// The interface concerns how you connect to the app
// What is JSON? (JavaScript Object Notation)
// Javascript Object
const dog = {
  name: 'rupert',
  age: 12,
  isFriendly: true,
  favoriteFood: 'puppy chow',
};

const dogJSON = JSON.stringify(dog);
console.log(`js dog: ${dog}`);
console.log(`json dog: ${dogJSON}`);
console.log(`js dog: ${JSON.parse(dogJSON).name}`);
// What does it mean for a server to be a JSON web API?
// serves JSON
