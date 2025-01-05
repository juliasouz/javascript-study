/* Specify Only the Lower Number of Matches
Change the regex haRegex to match the word Hazzah only when it has four or more letter z's. */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);