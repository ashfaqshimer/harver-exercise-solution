const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE
// Task 1 - Random Words
function printWords() {
  for (let i = 1; i <= 100; i++) {
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

// Task 3 - Asynchronous
async function asyncPrintWords() {
  try {
    for (let i = 1; i <= 100; i++) {
      const word = await getRandomWord({ withErrors: false });
      console.log(`${i} : ${word}`);
    }
  } catch (error) {
    console.error(error);
  }
}

async function asyncFizzBuzz() {
  try {
    for (let i = 1; i <= 100; i++) {
      let word = await getRandomWord();

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
  } catch (error) {
    console.error(error);
  }
}

const rando = asyncFizzBuzz();
