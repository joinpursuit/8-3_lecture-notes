/**
 * Array.filter(fn) <-- higher order because its takes a fn as parameter
 * Traverse the array, returning only the elements who pass a certain condiiton
 * - when we pass the element to the conditional, it evaluates to true
 * 5 --> x > 10 --> false --> 5 DOES NOT get added to the new array
 * 14 --> x > 10 --> true --> 14 DOES get added to the new array
 *
 * Side Effects: NOT meant for side effects
 *
 * Return Value: DOES return a new array
 */

let fans = [
  {
    name: 'georgia',
    age: 12,
  },
  { name: 'kyle', age: 32 },
  {
    name: 'Demitrius',
    age: 21,
  },
];

// only admit people over 18 to the fan pub
// store the filtered fans in a new array
const pubFans = fans.map(function (fan) {
  if (fan.age > 18) {
    return fan;
  } else {
    return undefined;
  }
});

// console.log(pubFans);

// filter function is best when you want to return a new array that is a subset of the original array
let legalFans = fans
  .filter(function (fan) {
    return fan.age > 18;
  })
  .map(function (fan) {
    return fan.name;
  });

console.log(legalFans);

// legalFansNames = legalFans.map(function (fan) {
//   return fan.name;
// });

// console.log(legalFansNames);

// do not edit the comics object
const comics = [
  {
    title: 'Calvin & Hobbes',
    author: 'Bill Watterson',
    kind: 'print',
  },
  {
    title: 'Zen Pencils',
    author: 'Gavin Aung Than',
    kind: 'web',
  },
  {
    title: 'Nancy',
    author: 'Olivia James',
    kind: 'print',
  },
  {
    title: 'False Knees',
    author: 'Joshua Barkman',
    kind: 'web',
  },
];

/**
 * 1
 *
 * Mentally evaluate the code below before running it. What do you think will be logged out? Why?
 */

function isPrintComic(comic) {
  return comic.kind === 'print';
}

const isPrintComicResult = comics.filter(isPrintComic);
console.log(isPrintComicResult);

/**
 * 2
 *
 * What would happen if the callback function had the code below instead? Why?
 */

function isPrintComic(comic) {
  return comic.kind;
}

/**
 * 3
 *
 * `type` is not a key on each comic object. Keeping that in mind, would happen if the callback function had the code below instead? Why?
 */

function isPrintComic(comic) {
  return comic.type;
}
