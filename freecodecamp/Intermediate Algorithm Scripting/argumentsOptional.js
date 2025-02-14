/* Arguments Optional
Create a function that sums two arguments together.
If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

function addTogether() {
    var args = Array.from(arguments);
    if (args.some(arg => typeof arg !== 'number')) {
        return undefined;
    }
    if (args.length === 2) {
        return args[0] + args[1];
    }
    return function(arg2) {
        if (typeof arg2 !== 'number') {
            return undefined;
        }
        return args[0] + arg2;
    };
}

addTogether(2,3);