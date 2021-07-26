// JavaScript Basics

// **************************
// Basic JavaScript 1
// introduce console.log() + comments
// console.log("Hello World");
// console.log("Hello" + "World");
console.log(`Hello World`);

// **************************

// **************************

// Basic JavaScript 2
// introduce datatypes - strings, numbers, booleans + variables

// A variable a way to locally store data within the project. Variables to act within their own 'scope' which we will discuss in a later lesson

// let's set a variable as a string one of the primitive data types in programming
// 3 ways to set a variable in JavaScript es6

// 1 var - old school - can be reassigned + updated / not scope blocked
// datatype 1 - string - strings are words, phrases, letters, or anything used for text purposes a string can be as long as a full book or as short as no characters
var name = "Nick";
// console.log(name)

// 2 let - new Es6 - can NOT be reassigned + can be updated
// datatype 2 - numbers - numbers or integers not inside of quotes used for calculation
const age = 25;
// console.log(age)

// 3 const - new Es6 - can NOT be reassigned + can NOT be updated
// booleans = true or false
const isRobot = false;
// console.log(isRobot);

// **************************

// **************************

// Basic JavaScript 3
// introduce basic data structures - arrays + objects

// an array is a data structure that can contain any data type and separates them by commas
// we set arrays just as we would set any other variable
// arrays are enclosed by square brackets
const justiceLeague = [name, age, isRobot];
// console.log(justiceLeague);

// arrays start at an index of 0
// if you want to grab a specific item from an array you can based of it's index
// in this example it is easy to determine the index, in a later lesson we will discuss more ways of accessing an array

// for this example if you wanted get just the name from array here is how you would go about it
// console.log(justiceLeague[0])

// you would repeat this for an other specific index you would like to pull out

// an object is another data structure but can also be treated as a datatype - can be used in arrays
// an object requires key:value pairs
// an object is enclose by curly braces

const person = {
  name: "Nick",
  age: 25,
  isRobot: false,
};

// similar to accessing items in an array, you can access items in an object
// one main difference is you will access the value of an item in an object based of it's key
// this is similar to an array because an array item's index is implicitly it's index value, whereas in an object we explicitly set it's key

// an example of this with the object we are working with above would be as follows:
// if we wanted the age of the person from the object we would access it as follows
// console.log(person.age);

// if you are unsure of the object's key but are pretty sure what a key will be name you can pass it in as a string
// console.log(person["age"]);

// we can also set these values to new variables
// if we wanted to grab the person's name and set it to a new variable we can do that with the same fashion
const personName = person.name;
// console.log(personName);

// console.log(person);

// **************************

// **************************

// Basic JavaScript 4
// introduce condition statements
// if statements are used to conditional execute a block of JavaScript code if the conditional is correct
// an example that we will use is to check if our person is old enough to drink alcohol

if (age >= 21) {
  //   console.log("You are old enough to drink!");
} else {
  //   console.log("You need a few more years under your belt kid!");
}

// **************************

// Basic JavaScript 5
// introduce loops
// introduce both while and for loops

// start with while loop
// while loop will continue to iterate the block of JavaScript given while the condition is true
// to demonstrate this we can initialize a variable to use as a conditional

// here we set a variable number to 0
let number = 0;

// while our number is less than 10 execute the code inside the loop
while (number < 10) {
  //   console.log(`number is ${number}`);
  number = number + 1;
}

// for loops
// for loops are similar to while loops, except inside of while a condition is true, we loop through a block of code a number of times
// the number of loops ( or iterations ) are based on a variable we set inside the for loop

// this for loop is doing the same thing as our while loop
// the difference is in a for loop it is easier to determine the amount of iterations
for (let i = 0; i < 10; i++) {
  //   console.log(`number is ${i}`);
}

// JavaScript Basics 6
// introduction to functions in JavaScript
// a function is block of code that we can reuse anytime we call the function
// a function can take parameters, parameters are just variable that the function accepts to be able to complete the code inside the function
// to demonstrate a function we will create a simple function that adds 2 numbers together

// first we will right the function in the 'old style' pre Es6

function oldAdd(number1, number2) {
  return number1 + number2;
}

// the same function again but in new style or Es6

const newAdd = (number1 = 1, number2 = 2) => {
  return number1 + number2;
};

// console.log(oldAdd(1, 2));
// console.log(newAdd());

// JavaScript Basics Test #1
// In this test you will be putting together everything you have learned thus far
// You will create a function ( either Es6 or pre-Es6 ) and the function will take in one parameter
// The parameter is going to be an array, you can set this as a default using Es6 syntax
// alternatively if you want to use pre-Es6 here is the array to pass when you call the function
// const numberArray = [2, 5, 8, 3, 11, 4, 15]
// 1. Create a function that takes an array as a parameter
// 2. Loop through the array
// 3. While looping through the array grab all numbers that are greater than 5
// 4. Find the sum of all the numbers that are greater than 5

const testFunction = (array = [2, 5, 8, 3, 11, 4, 15]) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    console.log(sum);
    if (array[i] > 5) {
      sum = sum + array[i];
    }
  }
  console.log(sum);
};

// testFunction();
