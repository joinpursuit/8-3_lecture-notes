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
 * Write a new function called getAuthors(). The function should take in an array of comics (like above) and return an array of just the authors' names.
 *
 * Do not use the .map() method just yet. Instead, use an accumulator pattern.
 */
function getAuthors(comics) {
  // Write your code here!
}

const getAuthorsResult = getAuthors(comics);
console.log(getAuthorsResult); //> [ "Bill Watterson", "Gavin Aung Than", "Olivia James", "Joshua Barkman"]

/**
 * 2
 *
 * Now, update your getAuthors() function to make use of the .map() method. The function should produce the same result.
 *
 * Compare what you had written with what you have now. What is a benefit of using the .map() method?
 */

/**
 * 3
 *
 * Mentally evaluate the code below before running it. What do you think will be logged out? Why?
 */

function getTitle(comic) {
  comic.title;
}

const getTitleResult = comics.map(getTitle);
console.log(getTitleResult);
