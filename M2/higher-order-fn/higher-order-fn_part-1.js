// WHAT IS A HIGHER ORDER FN?
//    returns fn
//    accepts fn as parameter
//    how anonymous fns are useful in higher order fns
//    common programming pattern, endlessly useful for devs

// WHY DO HIGHER ORDER FNS EXIST?
//    useful for passing information around in a dynamic/modular way

// HOW CAN WE WRITE HIGHER ORDER FNS?
// ex. typical fn
function isCold(temp, coldTemp) {
  if (temp > coldTemp) {
    return false;
  }

  return true;
}

// console.log(isCold(60, 50));

const degrees60F = isCold(60, 50);

// console.log(degrees60F);

// ex. higher order fn
function outer() {
  function inner() {
    function innerInner() {
      return "i'm the inner inner fn";
    }
    return innerInner;
  }

  // returning a function without explicitly calling it
  // does not call the function
  // it just returns the function
  return inner;
}

// console.log(outer()()()); // returns: [Function: inner]
// Function is the type of return value
// inner is the name of the return value

// store the outer fn's return value in a variable
const outerReturnVal = outer();
// store the inner fn's return value in a variable
const innerReturnVal = outerReturnVal();

// compare both return values
// console.log(outerReturnVal);
// console.log(innerReturnVal);

// Higher order fn that accepts a fn as a parameter?
function describeColdWeather(fn, forecast) {
  const message = "It's cold outside";

  return fn(message, forecast);
}

function describeHotWeather(fn, forecast) {
  const message = "It's hot outside";

  return fn(message, forecast);
}

const describeWeather = (currentWeather, forecast) => {
  return `TODAY'S WEATHER REPORT: ${currentWeather} | ${forecast}`;
};

const tomorrowWeather = 'Sunny';

// console.log(describeColdWeather(describeWeather, tomorrowWeather));
// console.log(describeHotWeather(describeWeather, tomorrowWeather));

// How are anonymous fns useful in higher order fns?
// anonymous fns are just fns without a name
// ex. higher order fn
function outerAnon() {
  return function () {
    return "i'm the inner inner fn";
  };
}

// console.log(outerAnon()); // returns: [Function (anonymous)]

// ex. 2
function describeRainyWeatherC(fn, forecast, tomTempF) {
  const message = "It's rainy outside";

  return fn(message, forecast, tomTempF);
}

const tomorrowTempF = 80;

// console.log(
//   describeRainyWeatherC(
//     function (currentWeather, forecast, tomTempF) {
//       let celsiusTomTemp = (tomTempF - 32) * 0.5556;
//       return `TODAY'S WEATHER REPORT: ${currentWeather} | ${forecast} and ${celsiusTomTemp} degrees celsius`;
//     },
//     tomorrowWeather,
//     tomorrowTempF,
//   ),
// );

// CALCULATORS EXAMPLE
// a is a number
// b is a number
// fn is a function
// the fn return result is also a number
// return res is a number
const calculatorValidator = (a, b, fn) => {
  console.log(fn);

  let res;

  if (typeof a === 'number' && typeof b === 'number') {
    res = fn(a, b);
  } else {
    return 'ERROR: a and b must be numbers';
  }

  if (typeof res !== 'number') {
    return 'ERROR: calculator functions must return a number';
  }

  return res;
};

// returns the exponent of a
const exponent = (a, b) => {
  console.log("I just called called! I'm the exponent function!");
  return Math.pow(a, b);
};

// console.log(calculatorValidator(39, 4, exponent));
// console.log(calculatorValidator('honey', 'moon', exponent));
// console.log(calculatorValidator('honey', 3, exponent));

const exponential = calculatorValidator(3, 7, function (a, b) {
  console.log("I just called called! I'm the anonymous function!");
  return Math.pow(a, b);
});

// console.log(exponential);
