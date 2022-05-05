// 1. Read through the code below and predict what will be logged to the console.
// 2. Run the code. Were your predictions correct? Why or why not?
// 3. Discuss the questions in the comments below the code with your partner

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.kingdom = "Animal Kingdom";
  }

  speak(sentence) {
    console.log(`${this.name} says "${sentence}"`);
  }
}

let myDog = new Animal("Sully");
// console.log(myDog.name); // Sully
// myDog.speak("bark bark!"); // Sully says "bark bark"
// console.log(typeof myDog); // object
// console.log(myDog instanceof Animal); // true

// The Animal class has two methods. What are there names?
//   -> constructor and speak
// How is the sytax for declaring class methods different from function declarations?
//   -> with class methods, we can omit the "function" keyword when we declare them
// What is the purpose of the constructor method?
//   -> It sets up / initializes a new object. Frequently its used to add new properties to an object.
// What is does the keyword "this" refer to?
//   -> Its a special "context" variable that references a specific class instance
// What is the "new" keyword used for? Why do we need it / what does it do?

let spike = new Animal("Spike");
// spike.speak("woof woof");

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 2);
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks.`;
  }
}

let trixy = new Dog("trixy", "rottweiler");
console.log(trixy.bark()); // can trixy bark?
trixy.speak("Hello 8.3"); // can trixy speak?
console.log(trixy);

// console.log(trixy instanceof Dog);
// console.log(trixy instanceof Animal);
