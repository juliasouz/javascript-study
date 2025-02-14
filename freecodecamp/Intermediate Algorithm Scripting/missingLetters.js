/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(str[0]);
    let end = alphabet.indexOf(str[str.length - 1]);
    let range = alphabet.slice(start, end + 1);
    let missing = range.split("").filter(x => !str.includes(x));
    return missing.length ? missing.join("") : undefined;
}

fearNotLetter("abce");