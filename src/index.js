const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE
function printWords() {
  for (let i = 0; i <= 100; i++) {
    console.log(`${i} : ${getRandomWordSync()}`);
  }
}

const rando = printWords();

console.log(rando);
