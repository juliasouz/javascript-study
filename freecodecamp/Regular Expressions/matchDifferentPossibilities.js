/* Match a Literal String with Different Possibilities
Complete the regex petRegex to match the pets dog, cat, bird, or fish. */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);