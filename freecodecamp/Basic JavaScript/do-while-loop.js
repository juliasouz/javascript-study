/* Iterate with JavaScript Do...While Loops
Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray,
and i will be equal to 11 when your code has finished running. */

const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 11);

while (i < 5) {
  myArray.push(i);
  i++;
}