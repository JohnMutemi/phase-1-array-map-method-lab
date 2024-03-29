const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// define a function titleCased that  returns an array with title case tutorial names.
function titleCased() {
  return tutorials.map(function(tutorial) {
    // Split each tutorial title into an array of words
    const wordsInArray = tutorial.split(' ');
    // Capitalize the first letter of each word and join them back
    const upperCasedWords = wordsInArray.map(function(letter) {
      return letter.charAt(0).toUpperCase() + letter.slice(1);
    });
    // Join the capitalized words
    return upperCasedWords.join(' ');
  });
}

// invoke the function
console.log(titleCased());