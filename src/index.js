const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE
// Task 1 - Random Words
function printWords() {
  for (let i = 0; i <= 100; i++) {
    console.log(`${i} : ${getRandomWordSync({ withErrors: false })}`);
  }
}

// Task 2 - FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let word = getRandomWordSync();

    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;

    if (fizz && buzz) {
      word = 'FizzBuzz';
    } else if (fizz) {
      word = 'Fizz';
    } else if (buzz) {
      word = 'Buzz';
    }

    console.log(`${i} : ${word}`);
  }
}

const rando = fizzBuzz();

console.log(rando);
