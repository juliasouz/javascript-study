/* Verify an Object's Constructor with instanceof
Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms.
Then, use instanceof to verify that it is an instance of House. */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
  
let myHouse = new House(5);
  
myHouse instanceof House;