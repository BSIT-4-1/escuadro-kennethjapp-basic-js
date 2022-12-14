console.log("Hello World!");
// console.error()
// console.table()
// console.warn()
// console.time()
// console.timeEnd()

// Variable declaration
// string, number, boolean, object, function
let name = "Japp"; // string
let age = 21; // number
let isSingle = true; // boolean
let hobbies = ["watching netflix series", `playing Valorant`, "playing Basketball"];
let jsonObject = { name, age, isSingle, hobbies };
let run = function () {
  console.log(name + " is running.");
};

console.log(
  " My name is " + name,
  " My age is " + age,
  " Am I taken? " + isSingle,
  " My hobbies are " + hobbies,
  run
);

console.log(jsonObject);

let _let = "something";
let _function = "something";

console.log(typeof name);

// If else statement...
// >, <, !, ==, >=, <=, ||, &&, === // Condition operator
// + - * / % // Math operands
// if (age === "25") console.log(`${age} == ${25}`);
// else console.log(`${age} != ${25}`);

// 1 to 18 = bata pa
// 19 - 21 = college na
// 22 ++ = unemployed

switch (true) {
  case age >= 22:
      console.log("Im unemployed.");
      break;
  case age >= 19 && age <= 21:
      console.log("College na");
      break;
  default:
      console.log("Bata pa");
      break;
}


// TODO: Refactor the if else statement above to a switch statement.

let a = 0;
// Loops
while (a < 10) {
  console.log("*");
  a++;
  if (a == 5) break;
}

for (let b = 0; b <= 10; b++) {
  console.log("x".repeat(b));
  if (b == 5) break;
}

// TODO:
/*
        *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *
*/


hobbies.forEach((hobby, i) => {
  if (i >= 1) return;
  console.log(hobby, i);
});

// Requiring / Importing other js files.
const _functions = require("./functions.js");
_functions.consoleMessage("Log this message.");

function createDiamond (numberOfAsterisks){
    // If <numberOfAsterisks> is an odd number, add +1, to make it an even number.
    //Loop to create diamond using <numberOfAsterisks>.
    for(let a=0; numberOfAsterisks>=a; a++){
      if (a%2 == 0){}
      else{
          let Spaces = ((numberOfAsterisks - a) /2);
          console.log((" ".repeat(Spaces)) + ("*".repeat(a)));
      }
    };
  
    for(let b=numberOfAsterisks-2; 0<=b; b--){
      if (b%2 == 0){}
      else{
          let Spaces = ((numberOfAsterisks - b) /2);
          console.log((" ".repeat(Spaces)) + ("*".repeat(b)));
      }
    };
  }
  
  createDiamond(9);