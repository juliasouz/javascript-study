/* Using Objects for Lookups
Convert the switch statement into an object called lookup.
Use it to look up val and assign the associated string to the result variable. */

function phoneticLookup(val) {
    let result = "";
  
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
    result = lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");