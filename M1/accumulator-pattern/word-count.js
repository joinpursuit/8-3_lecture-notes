/**
 * wordCount accepts a sentence and returns an object of word frequencies.
 *
 * @param {String} sentence
 * @returns {Object} - Object mapping words to word counts
 *
 * Ex:
 *
 * wordCount("fly away fly away visit the moon")
 * => {fly: 2, away: 2, visit: 1, the: 1, moon: 1}
 */
function wordCount(sentence) {
  // 1. transform sentence into an array of words
  let words = sentence.split(" ");

  // 2. Create word frequency object. Default value should be {}
  let wordFrequencies = {};
  // 3. Iterate through our array of words
  for (let word of words) {
    // lookup key for our current word
    if (wordFrequencies[word]) {
      // if it does exist, increment its value by 1
      wordFrequencies[word] += 1;
    } else {
      // if no key exists yet, assign it a value 1
      wordFrequencies[word] = 1;
    }
  }

  return wordFrequencies;
}

console.log(wordCount("fly away fly away visit the moon"));

// 1. Understand the problem: check!
// function input: string that is a sentence
// function output: object where the keys are words that appear in the sentence, the values are a number representing the word count
// key terms: word frequencies
// clarifying question: is the word frequency supposed to be a raw word count, or a percentage value? A: let's just use word count
// clarifying question: What should we output sentence is an empty string? A: an empty object!

// 2. Devise a plan: check!
// Observation: this problem would be easier to solve if we had an array of words, rather than a single sentence as a string
// See our pseudo code!

// 3. Implement your solution: check!

// 4. TODO: Reflect
// Is our code correct? How can you tell?
// Can we make our code easier to read?
// Can we make our code more efficient?
