/* Implement the filter Method on a Prototype
Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
You should not use the built-in filter method.
The Array instance can be accessed in the myFilter method using this. */
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    this.forEach((item, index, array) => {
        if (callback(item, index, array)) {
            newArray.push(item);
        }
    });
    return newArray;
};
