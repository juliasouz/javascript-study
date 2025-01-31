/* Change the Prototype to a New Object
Add the property numLegs and the two methods eat() and describe() to the prototype of Dog
by setting the prototype to a new object. */

function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};