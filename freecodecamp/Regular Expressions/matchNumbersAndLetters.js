/* Match Numbers and Letters of the Alphabet
Create a single regex that matches a range of letters between h and s,
and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex. */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);