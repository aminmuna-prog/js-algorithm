// Q:Write a function findlongestword that takes a string as input and returns the longest word in strin. If there were multiple longest words, returns the first one encountered
// constraints
// ? The input string may contain alphabetic character, digits, spaces, and punctuation.
//? The input string is non-empty
//? The input string may contain multiple words separated by spaces

// * Note:
//? If the input string is empty or contains only whitespace, the function should return an false
//? The function should ignore leading and trailing whitespace when determining the word

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  return words[0];
  // we can do it by reduce function
  //   return words.reduce(
  //     (accum, currentval) =>
  //       currentval.length > accum.length ? currentval : accum,
  //     ""
  //   );
};

console.log(findLongestWord("Javascript is my favourite programming language"));
