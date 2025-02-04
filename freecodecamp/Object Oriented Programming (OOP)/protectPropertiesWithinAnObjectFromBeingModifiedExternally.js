/* Use Closure to Protect Properties Within an Object from Being Modified Externally
Change how weight is declared in the Bird function so it is a private variable.
Then, create a method getWeight that returns the value of weight 15. */

function Bird() {
    let weight = 15;
    this.getWeight = function() {
        return weight;
    }
}