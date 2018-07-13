//Create a function called `go` that takes 2 arguments: 
//1. direction (forwards, backwards, etc.)
//1. speed (mph).

//The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

// function go(direction, speed){
//     console.log(`The car is moving ${direction}, at ${speed} mph.`);
// }

// go("west", "200")


////////////////////////////////// PART TWO \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!

// function go(direction, speed){
//     if(speed > 75){
//         console.log(`The car is moving ${direction}, at ${speed} mph.`);
//         console.log("Slow Down!")
//     } else {
//         console.log(`The car is moving ${direction}, at ${speed} mph.`);
//     }
// }

// go("east", "75")
// go("west", "78")
// go("north", "95")

// Given the following set of data about chicken birth rates, you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.

const birthRates = [
  { year: 1969, birthRate: 13}, 
  { year: 1970, birthRate: 16}, 
  { year: 1971, birthRate: 15}, 
  { year: 1972, birthRate: 11}, 
  { year: 1973, birthRate: 18}, 
  { year: 1974, birthRate: 17}, 
  { year: 1975, birthRate: 9}
]
const bestYears = [];

////////////////////////////// Basic Resolution \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

for (let i = 0; i < birthRates.length; i++) { //Just a simple for loop
    const currentYear = birthRates[i]; //declare a variable to store the iterations of the array
    if(currentYear.birthRate > 15){ //conditional to call that specific iteration, the dot to denote the method (object property), and state that if greater than 15 yrs ....
        bestYears.push(currentYear) // take that section of the array and push it to the empty array
    }
    
}
console.log(bestYears); //log to check out that it worked

///////////////////// Can also be written as \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


birthRates.forEach(function (currentYear){ //forEach. just iniates a loop on the array birthRates. For each iteration of this birthRates array, i want you to do this (a new function). forEach also requires an argument to pass the data around, which is currentYear here.
    if(currentYear.birthRate > 15){ //same argument, same data
        bestYears.push(currentYear) //push the data to the new array
    }
});
console.log(bestYears); // again log to make sure it worked.


///////////////////// Yet Another Way \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

for (currentYear of birthRates) { // for/of loop, pass an argument (data container) thar will iterate through the birthRates array and grab object data 
    if(currentYear.birthRate > 15){ // data-container.property,essentially
        bestYears.push(currentYear) // push data from container to the empty array
    }
};
console.log(bestYears); //again log to ensure it worked

////////////////////////////////// yikes \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




//////////////////////////////// Object Practice \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const politician = {
    platform: {
        money: ['I like it', 'I have lots of it', 'I dont want you to have any'],
        health: 'Im against it'
    },
    district: 'Michigan 13'
};
console.log(politician.platform.money[1])

//////////////////////////////////////////////////////////////////////////////////

//1. Create a function that logs the result of adding two numbers that were passed in as arguments.
//2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
//3. Invoke each function a couple times with different argument values.

function addStuff(num1, num2){
    let sum = num1 + num2;
    console.log(sum)
}
addStuff(06, 10)

function SubtractStuff(num1, num2){
    let difference = num1 - num2;
    console.log(difference);
}
SubtractStuff(06, 10)

function calculate(a, b, operator){
    operator(a,b);
}
calculate(5, 4, addStuff);