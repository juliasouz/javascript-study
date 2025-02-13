/* Refactor Global Variables Out of Functions
Rewrite the code so the global array bookList is not changed inside either function.
The add function should add the given bookName to the end of the array passed to it
and return a new array (list).
The remove function should remove the given bookName from the array passed to it.
Note: Both functions should return an array,
and any new parameters should be added before the bookName parameter. */

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(list, bookName) {
    return [...list, bookName];
}

function remove(list, bookName) {
    const bookIndex = list.indexOf(bookName);
    if (bookIndex >= 0) {
        return [...list.slice(0, bookIndex), ...list.slice(bookIndex + 1)];
    }
    return list;
}
