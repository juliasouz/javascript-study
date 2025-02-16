/* Copy Array Items Using slice()
We have defined a function, forecast, that takes an array as an argument.
Modify the function using slice() to extract information from the argument array
and return a new array that contains the string elements warm and sunny. */

function forecast(arr) {
    return arr.slice(2,4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));