/**
 * Array.find(fn) <-- higher order since it takes a fn parameter
 *
 * Side Effect: DO NOT use .find for side effects
 *
 * Return Value: returns either a value, or undefined
 *
 * The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
 *
 * Further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

// console.log(found); // expected output: 12

let fans = [
  {
    name: 'georgia',
    age: 12,
  },
  {
    name: 'kyle',
    age: 32,
  },
  {
    name: 'Demitrius',
    age: 21,
  },
];

let legalFans = fans.find(function (fan) {
  return fan.age > 18;
});

console.log(legalFans);

// do not edit the comics object
const comics = [
  { title: 'Calvin & Hobbes', author: 'Bill Watterson', kind: 'print' },
  { title: 'Zen Pencils', author: 'Gavin Aung Than', kind: 'web' },
  { title: 'Nancy', author: 'Olivia James', kind: 'print' },
  { title: 'False Knees', author: 'Joshua Barkman', kind: 'web' },
];

/**
 * 1
 *
 * What will be the difference between filterResult and findResult after the code is run below?
 */

function getJoshuaBarkmanComic(comic) {
  return comic.author === 'Joshua Barkman';
}

const filterResult = comics.filter(getJoshuaBarkmanComic);

console.log(filterResult);

const findResult = comics.find(getJoshuaBarkmanComic);
console.log(findResult);

/**
 * 2
 *
 * Is it possible to modify the getJoshuaBarkmanComic() function so that it could instead find any author? If so, how so? If not, why not?
 *
 * Will Calvin & Hobbes or Nancy be returned by the following code? Why?
 */

function isPrintComic1(comic) {
  return comic.kind === 'print';
}

const isPrintComic1Result = comics.find(isPrintComic1);
console.log(isPrintComic1Result);

/**
 * 3
 *
 * What will get returned from the following code? Why?
 */
function isPrintComic2(comic) {
  return comic.kind;
}

const isPrintComic2Result = comics.find(isPrintComic2);
console.log(isPrintComic2Result);
