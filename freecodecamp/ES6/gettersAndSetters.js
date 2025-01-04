/* Use getters and setters to Control Access to an Object
Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter that accepts a temperature
in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit,
and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale,
either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user,
who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user. */

class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
  
    get temperature() {
        return 5/9 * (this.fahrenheit - 32);
    }
  
    set temperature(celsius) {
        this.fahrenheit = celsius * 9.0 / 5 + 32;
    }
}
  
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;