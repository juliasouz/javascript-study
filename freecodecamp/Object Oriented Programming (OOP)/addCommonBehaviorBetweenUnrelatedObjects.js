/* Use a Mixin to Add Common Behavior Between Unrelated Objects
Create a mixin named glideMixin that defines a method named glide.
Then use the glideMixin to give both bird and boat the ability to glide. */

let bird = {
    name: "Donald",
    numLegs: 2
};
  
let boat = {
    name: "Warrior",
    type: "race-boat"
};
    
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Glide");
    }
}
  
glideMixin(bird);
glideMixin(boat);
  
bird.glide();
boat.glide();