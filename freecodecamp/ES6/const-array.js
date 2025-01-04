/* Mutate an Array Declared with const
An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments. */

const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();