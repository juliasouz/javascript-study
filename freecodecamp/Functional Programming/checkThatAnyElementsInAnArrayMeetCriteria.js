/* Use the some Method to Check that Any Elements in an Array Meet a Criteria
Use the some method inside the checkPositive function to check if any element in arr is positive.
The function should return a Boolean value. */

function checkPositive(arr) {
    return arr.some((value) => value > 0);
}

checkPositive([1, 2, 3, -4, 5]);