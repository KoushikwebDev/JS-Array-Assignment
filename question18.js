// 18. Get user input using prompt(โEnter your age:โ). If user is 18 or older , give feedback:'You are old enough to drive'
//     but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let promptSync = require("prompt-sync");
let prompt = promptSync();

let canDrive = () => {
  let gotAge = prompt("Enter Your Age: ");
  let age = Number.parseInt(gotAge);

  let drive =
    age >= 18
      ? "You are old enough to drive ๐"
      : "You are not old enough to drive ๐ฃ";
  return drive;
};

let result = canDrive();
console.log(result);
