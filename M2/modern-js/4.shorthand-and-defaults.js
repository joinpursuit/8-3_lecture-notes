/**
 * 1. Use object shorhand to construct an object using all of the following variables.
 */
const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";
const name1 = {first, middle, last};

const fullName2 ={
  first: first,
  middle: middle,
  last: last,
};


// Object shorthand converts the varibles asssignment operator '=' into key/val assoxiator operator ':'
console.log(fullName2);
console.log(name1);
/**
 * 2. What are some of the benefits of using object shorthand? Are there any limitations? Write a brief response below.
 */
// shorter!!

//BUT 

// you're stuck with the same name

// shorter!

// BUT

// you're stuck with the same names

/**
 * 3. The function below expects that sometimes name will not be provided. Update the greet() function so that it uses default parameters.
 */
const greet = (name = 'space cadet') => `Welcome to NASA, ${name}!`;
  



console.log(greet("Jessica")); //> "Welcome to NASA, Jessica!"
console.log(greet()); //> "Welcome to NASA, space cadet!"

/**
 * 4. What are some of the benefits of using default parameters? Are there any limitations? Write a brief response below.
 */
// removing conditional logic from our function definitions
//BUT
//  you have to be careful about default values that are arrays or objects 
