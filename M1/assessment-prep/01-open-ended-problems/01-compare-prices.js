// Setup: The program below is supposed to check which value is larger, but it's broken.
//    Checkpoint: How can you tell it's broken? Can you run the code?
// Challenge:  Fix the program so that it correctly checks which value is larger.

// Hint:
//  Write a function that converts a string like "€39.501" into the number 39501
//  Using this function, compare the price of the house to the price of the car AS NUMBERS

// DO NOT CHANGE THE VALUE OF THESE VARIABLES
const priceOfHouse = '€1.500.000';
const priceOfCar = '€20.000';
const ageOfCat = 20;
const ageOfDog = 5;

if (priceOfHouse > priceOfCar) {
  console.log('The house is more expensive');
} else {
  console.log('The car is more expensive');
}

// we are assuming the function should only compare string args, and ignore other types
// assuming everything is in euros, no decimal places
function comparePrices(price1, price2) {
  let result = `Neither price 1: ${price1} or price 2: ${price2} contains any currency values to compare`;

  const strPrices = [price1, price2];
  let strPricesData = {};

  for (let i = 0; i < strPrices.length; i++) {
    strPricesData[i] = {
      strPrice: strPrices[i],
      isString: false,
      containsNumbers: false,
      price: NaN,
      // todo: *wishlist* get currency type to be able to convert between currencies
    };
    let tempPrice = '';

    if (typeof strPrices[i] === 'string') {
      strPricesData[i].isString = true;

      for (let char of strPrices[i]) {
        let tempChar = parseInt(char);
        if (typeof tempChar === 'number') {
          if (!isNaN(tempChar)) {
            strPricesData[i].containsNumbers = true;
            tempPrice += tempChar.toString();
          }
        }
      }
    }
    strPricesData[i].price = parseFloat(tempPrice); // '33.65'
  }

  if (
    (strPricesData[0].containsNumbers === false &&
      strPricesData[1].containsNumbers === true) ||
    strPricesData[0].price < strPricesData[1].price
  ) {
    result = `${strPricesData[1].strPrice} is more expensive than ${strPricesData[0].strPrice}`;
  } else if (
    (strPricesData[1].containsNumbers === false &&
      strPricesData[0].containsNumbers === true) ||
    strPricesData[0].price > strPricesData[1].price
  ) {
    result = `${strPricesData[0].strPrice} is more expensive than ${strPricesData[1].strPrice}`;
  }

  return result;
}

console.log(comparePrices(priceOfCar, ageOfCat)); // <-- €20.000 is more expensive than 20
console.log(comparePrices(ageOfDog, ageOfCat)); // <-- Neither price 1: 5 or price 2: 20 contains any currency values to compare
console.log(comparePrices(priceOfCar, priceOfHouse)); // <-- €1.500.000 is more expensive than €20.000
console.log(comparePrices(priceOfHouse, priceOfCar)); // <-- €1.500.000 is more expensive than €20.000
