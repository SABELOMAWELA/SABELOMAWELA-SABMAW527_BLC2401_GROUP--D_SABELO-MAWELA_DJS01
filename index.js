/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const Velocity = 10000; // velocity (km/h)
const Acceleration = 3; // acceleration (m/s^2)
const Time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const Newdistance = distance + (Velocity*Time)/Time //calcultes new distance
const remainingFuel = fuel - (fuelBurnRate*Time)  //calculates remaining fuel
const Newvelocity = calcNewVelocity(Acceleration, Velocity, Time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVelocity (Acceleration, Velocity, Time) { 
  return Velocity + (Acceleration*Time)*(Time/1000)
}


Newvelocity === 48880 ? console.log(`Corrected New Velocity: ${Newvelocity} km/h `) : console.error("The units don't match 48880 km/h.");
Newdistance === 10000 ? console.log(`Corrected New distance: ${Newdistance} km `) : console.error("the units don't match 10000 km.");
remainingFuel === 3,200 ? console.log(`Corrected Remaining fuel: ${remainingFuel} kg `) : console.error("the units don't match 3,200 kg.")





