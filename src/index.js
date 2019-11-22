const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');
const { performance } = require('perf_hooks');

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

// Task 4 - Display an error
async function asyncErrorPrintWords() {
  for (let i = 1; i <= 100; i++) {
    try {
      const word = await getRandomWord({ withErrors: true });
      console.log(`${i} : ${word}`);
    } catch (error) {
      console.log(`${i} : It shouldn't break anything`);
    }
  }
}

async function asyncErrorFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    try {
      let word = await getRandomWord({ withErrors: true });

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
    } catch (error) {
      console.log(`${i} : It shouldn't break anything!`);
    }
  }
}

// Task 5 - Print to file
// An alternative approach would be to append to the file during each iteration of the loop. This could
// have it's use cases, however, in this scenario, it could result in a performance implication as the file
// will have to be read and written to during each iteration. Hence the approach used is to store the data
// in an Array and write to the file only once.
async function asyncErrorPrintWordsToFile() {
  const words = [];

  for (let i = 1; i <= 100; i++) {
    try {
      const word = await getRandomWord({ withErrors: true });
      const sentence = `${i} : ${word}`;
      words.push(sentence);
    } catch (error) {
      const sentence = `${i} : It shouldn't break anything`;
      words.push(sentence);
    }
  }
  // OPTIONAL - At this point we could send the data as a response using res.send(words)
  const wordsJSON = JSON.stringify(words);
  fs.writeFileSync('words.json', wordsJSON);
  console.log('Success!');
}

async function asyncErrorFizzBuzzToFile() {
  const words = [];

  for (let i = 1; i <= 100; i++) {
    try {
      let word = await getRandomWord({ withErrors: true });

      const fizz = i % 3 === 0;
      const buzz = i % 5 === 0;

      if (fizz && buzz) {
        word = 'FizzBuzz';
      } else if (fizz) {
        word = 'Fizz';
      } else if (buzz) {
        word = 'Buzz';
      }
      const sentence = `${i} : ${word}`;
      words.push(sentence);
    } catch (error) {
      const sentence = `${i} : It shouldn't break anything`;
      words.push(sentence);
    }
  }
  const wordsJSON = JSON.stringify(words);
  fs.writeFileSync('words.json', wordsJSON);
  console.log('Success!');
}

// BONUS TASKS
// Print Ascending order - The solution already has the numbers printing in Ascending order.
// To print in descending order, change the for loop to be:
// for (let i = 100; i<=0 ; i--)

// Solution to run in 1s
async function simultaneousAsyncGetWords() {
  console.log('Starting function');
  const startTime = performance.now();
  // Create an array of promises that can be used in Promise.all
  let promises = [...Array(100).keys()].map(() => getRandomWord({ slow: true }));
  let results = await Promise.all(promises);

  // Iterate through the results creating sentences and print to file
  let i = 0;
  const sentences = results.map((word) => {
    i++;
    const sentence = `${i} : ${word}`;
    console.log(sentence);
    return sentence;
  });

  // Write to file
  const sentencesJSON = JSON.stringify(sentences);
  fs.writeFileSync('words.json', sentencesJSON);
  const endTime = performance.now() - startTime;
  console.log(`Completed in ${endTime}ms`);
}

// TEST SOLUTIONS - Uncomment the appropriate function to run it
// printWords();
// fizzBuzz();
// asyncPrintWords();
// asyncFizzBuzz();
// asyncErrorPrintWords();
// asyncErrorFizzBuzz();
// asyncErrorPrintWordsToFile();
// asyncErrorFizzBuzzToFile();

// BONUS TASKS
// simultaneousAsyncGetWords();
