/* Destructuring via rest elements
Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice().
removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted. */

function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}
  
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);