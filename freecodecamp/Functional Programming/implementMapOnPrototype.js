/* Implement map on a Prototype
Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
You should not use the built-in map method.
The Array instance can be accessed in the myMap method using this. */

Array.prototype.myMap = function(callback) {
    const newArray = [];
    this.forEach((item, index, array) => newArray.push(callback(item, index, array)));
    return newArray;
};