/* Testing Objects for Properties
Modify the function checkObj to test if the object passed to the function parameter obj contains
the specific property passed to the function parameter checkProp.
If the property passed to checkProp is found on obj, return that property's value.
If not, return Not Found. */

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
  
    } else {
      return "Not Found";
    }
}