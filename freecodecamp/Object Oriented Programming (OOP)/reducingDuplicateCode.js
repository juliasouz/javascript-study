/* Use Prototype Properties to Reduce Duplicate Code
Add a numLegs property to the prototype of Dog */

function Dog(name) {
    this.name = name;
}
  
Dog.prototype.numLegs = 4;
  
let beagle = new Dog("Snoopy");