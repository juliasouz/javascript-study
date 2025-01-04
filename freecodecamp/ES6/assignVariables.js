/* Use Destructuring Assignment to Assign Variables from Objects
Replace the two assignments with an equivalent destructuring assignment.
It should still assign the variables highToday and highTomorrow the values of today and tomorrow
from the HIGH_TEMPERATURES object. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;