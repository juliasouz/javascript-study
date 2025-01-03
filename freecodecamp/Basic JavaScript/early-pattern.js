/* Return Early Pattern for Functions
 
Modify the function abTest so that if a or b are less than 0
the function will immediately exit with a value of undefined.
Hint: Remember that undefined is a keyword, not a string. */

function abTest(a, b) {
    if(a < 0 || b < 0) {
      return undefined;
    }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);