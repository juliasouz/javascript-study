/* Use Capture Groups to Search and Replace
Write a regex fixRegex using three capture groups that will search for each word in the string one two three.
Then update the replaceText variable to replace one two three with the string three two one
and assign the result to the result variable. Make sure you are utilizing capture groups
in the replacement string usingthe dollar sign ($) syntax. */

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);