/**
 * 1
 *
 * The .forEach() method's callback function has up to three parameters. What are these parameters?
 */

/**
 * 2
 *
 * Update the code below so that it uses .forEach() instead of a for loop. Inside of printAllComics() you will have to write another, anonymous function.
 */

// do not edit the comics object
const comics = [
  { title: 'Calvin & Hobbes', author: 'Bill Watterson', kind: 'print' },
  { title: 'Zen Pencils', author: 'Gavin Aung Than', kind: 'web' },
  { title: 'Nancy', author: 'Olivia James', kind: 'print' },
  { title: 'False Knees', author: 'Joshua Barkman', kind: 'web' },
];

function printAllComics(comics) {
  // Write your code here.
  for (let comic of comics) {
    console.log(`${comic.title} by ${comic.author}`);
  }
}

printAllComics(comics);

/**
 * 3
 * 
 * How can you update your .forEach() code so that it prints out the following?

1. Calvin & Hobbes" by Bill Watterson
2. Zen Pencils" by Gavin Aung Than
3. Nancy" by Olivia James
4. False Knees" by Joshua Barkman
*/

/**
 * 4
 * 
 * How can you update your .forEach() code so that it prints out the following?

(1 out of 4) Calvin & Hobbes" by Bill Watterson
(2 out of 4) Zen Pencils" by Gavin Aung Than
(3 out of 4) Nancy" by Olivia James
(4 out of 4) False Knees" by Joshua Barkman
*/
