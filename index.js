/* 
Homework 2/21/2023
*/

// 1) Call startsWith and endsWith on the provided string to make them true.
const testString = "We can't stop here, this is bat country!";
console.log(`testString.startsWith("We")`);
console.log(testString.startsWith("We"));
console.log(`testString.endsWith("!")`);
console.log(testString.endsWith("!"));

// 2)
const stringOne = "The dog meows";

const replacedString = stringOne.replace(`dog`, `cat`); // replace the word dog with cat
console.log(
  "const replacedString =  stringOne.replace(`dog`, `cat`);// replace the word dog with cat"
);

console.log(replacedString);

const stringTwo = "The cow jumped over the moon";

const indexOfOver = stringTwo.indexOf("over"); // get the index of over from stringTwo
console.log(`console.log(indexOfOver)`);
console.log(indexOfOver);

const stringThree = "Never gonna give you up never gonna let you down";

const lastIndex = stringThree.lastIndexOf("never"); // get the last index of never from stringThree
console.log(`const lastIndex = stringThree.lastIndexOf("never");`);
console.log(lastIndex);

// 3) Fill in the appropriate arthmetic operator to match the ouput
let one = 5 + 10; // => 15
let two = 90 / 3; // => 30
let three = 50 - 25; // => 25
let four = 20 * 5; // => 100

console.log(`let one = 5 + 10`);
console.log(one);
console.log(`let two = 90 / 3`);
console.log(two);
console.log(`let three = 50 - 25`);
console.log(three);
console.log(`let four =  20 * 5`);
console.log(four);

// 4) Write a program that takes a first and last name and formats them as follows:
// const firstName = "ryan"
// const lastName = "curtis"

// do some magic here...
// => "Ryan C."

function formatName(firstName, lastName) {
  return (
    firstName[0].toUpperCase() +
    firstName.slice(1) +
    " " +
    lastName[0].toUpperCase() +
    "."
  );
}

const my_name = formatName("john", "ipson");

console.log(my_name);
