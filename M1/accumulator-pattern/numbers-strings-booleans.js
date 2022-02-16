const snowMoney = [40.53, 20, 34.5, 200];
const lawnMoney = [40.53, 20, 34.5, 200];

// money array as arg
const sumMoney = (arr) => {
  // Default value type is a number
  // Value defaults to 0 (dollars)

  let res = 0;

  for (let cash of arr) {
    res += cash; // how do i add this up?
  }

  console.log(res);
};

sumMoney(snowMoney);
sumMoney(lawnMoney);

// Create an accumulator function which takes the following arguments:
// A number representing a person's grocery budget (budget)
// An array of numbers representing a person's grocery receipt totals (receipts)
// And returns a number representing how much budget remains after subtracting the total from each grocery receipt

function subtractSpendingFromBudget(budget, receipts) {
  // Step 1 define default return type and value
  // default type number
  // default value is budget
  let res = budget;
  console.log(`Starting budget: ${res}`);

  // Step 2 define loop
  for (let receipt of receipts) {
    // Step 3: Accumulate!!!
    res -= receipt; // subtract receipt amount from the res
    console.log(`New result: ${res}`);
  }

  return res;
}

const groceryBudget = 350;
const groceryReceipts = [40.24, 130.97, 99.02, 85.55];

console.log(subtractSpendingFromBudget(groceryBudget, groceryReceipts));

<<<<<<< HEAD


// Create an accumulator function which takes the following arguments:
// An array of strings including the names of each invitee to a dinner party
// And returns the same array with each name replaced with the following message:
// "Dear <name>, you are cordially invited to my dinner party."

people = [Spiderman,Batman, Flash, Rogue ] 

let invitees = ["Spiderman", "Flash", "Batman", "Superman", "Rogue"];

function AddInviteMessage (invitees) {
    for (let i = 0; i < invitees.length; i++) {
        invitees[i] = `Dear ${invitees[i]}, you are cordially invited to my dinner party.`;
    }
    return invitees;
}

console.log(AddInviteMessage(invitees));

=======
/**
 * Create an accumulator pattern function which takes the following arguments:
 *      An array of strings including the names of each invitee to a dinner party
 * And returns the same array with each name replaced with the following message:
 *      "Dear <name>, you are cordially invited to my dinner party."
 */

function formatInvite(invitees) {
  for (let i = 0; i < invitees.length; i++) {
    invitees[
      i
    ] = `Dear ${invitees[i]}, you are cordially invited to my dinner party.`;
  }
  return invitees; // Default type is array, default value is the given array
}

const partyGuests = ["matt", "krystal", "derek"];

console.log(formatInvite(partyGuests));
>>>>>>> c62358dad36a156aa98094f9a78ac2bd2d2c2216
