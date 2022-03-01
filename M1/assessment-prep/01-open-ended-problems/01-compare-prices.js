// Setup: The program below is supposed to check which value is larger, but it's broken.
//    Checkpoint: How can you tell it's broken? Can you run the code?
// Challenge:  Fix the program so that it correctly checks which value is larger.

// Hint:
//  Write a function that converts a string like "€39.501" into the number 39501
//  Using this function, compare the price of the house to the price of the car AS NUMBERS

// DO NOT CHANGE THE VALUE OF THESE VARIABLES
let priceOfHouse = "€1.500.000";
let priceOfCar = "€20.000";

// function commparePrice(){

// if (Number(priceOfHouse) > Number(priceOfCar)) {
//   return "The house is more expensive";
// } else {
//   return "The car is more expensive";
// }
// }
// console.log(commparePrice(priceOfHouse, priceOfCar))



function commparePrices(price1, price2){
  result = `Neither price 1: ${price1} or price 2: ${price2} is valid`
  const strPrices = [price1, price2]
let strPriceData = {}
  for (let i =0; i< strPrices.length; i ++){
    strPriceData[i]= {
      strPrices[i]: strPrices[i],
      isString: false,
      containsNumber: false
    }
if(typeof strPrices === 'string'){
  strPriceData[i].isString = true   
  
  for(let char of strPrices[i] )
 
      let tempChar= praseInt(char)
  if (isNaN(tempChar)){
    strPriceData[i].containsNumber = true
}
  
    }
  } if (strPriceData[0].containsNumber === false &&
    strPriceData[1].containsNumber=== false)
    {
    return `${strPriceData[1]} is more expensive that ${strPriceData[0]}`
  } else if (strPriceData[1].containsNumber === false) {
    return 
  }
  return result;
}

