// 1. Mentally evaluate the code below, and predict what will be logged.
//    When you're ready, run the code to check your prediction.
//    If your prediction was off, talk about why with your partner(s).

const books = [
  { title: "The Death of Vivek Oji", author: "Awaeke Emezi" },
  { title: "Confessions of the Fox", author: "Jordy Rosenberg" },
  { title: "Nevada", author: "Imogen Binnie" },
];

let moreBooks = books;
books[1].title = books[1].title.toUpperCase();

console.log("1a. books === moreBooks:", books === moreBooks);
console.log("1b. books[1]:", books[1]);
console.log("1c. moreBooks[1]:", moreBooks[1]);

// 2. Mentally evaluate the code below, and predict what will be logged.
//    When you're ready, COMMENT IN THE CONSOLE LOGS and run the code to check your prediction.
//    If your prediction was off, talk about why with your partner(s).

const lotteryNumbers = [81, 62, 53];
const nextLottoNums = [11, 22, 35];
const allNumbers = lotteryNumbers.concat(nextLottoNums);

// // COMMENT ME IN WHEN YOU WANT TO RUN THIS CODE
// console.log("2a. allNumbers:", allNumbers);
// console.log("2b. lotteryNumbers:", lotteryNumbers);
// console.log(
//   "2c. lotteryNumbers === nextLottoNums:",
//   lotteryNumbers === nextLottoNums
// );

// 3. Fix the code below so that it updates the .firstName property in the object

let person = {
  firstName: "avery",
  lastName: "satter",
};

// Hmmm... This line isn't updating the person object. Can you fix it?
Console.log(person.firstName.toUpperCase());

// Don't change the line below. When you fix the code, it should log AVERY
console.log("3. person.firstName:", person.firstName);
