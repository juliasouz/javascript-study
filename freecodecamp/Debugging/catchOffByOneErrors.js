/* Catch Off By One Errors When Using Indexing
Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console. */

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 0; i < len; i++) {
        console.log(firstFive[i]);
    }
}
  
countToFive();