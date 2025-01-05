/* Restrict Possible Usernames
Change the regex userCheck to fit the constraints listed above. */

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|[0-9]{2,})$/i;
let result = userCheck.test(username);