/* Use the Spread Operator to Evaluate Arrays In-Place
Copy all contents of arr1 into another array arr2 using the spread operator. */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);