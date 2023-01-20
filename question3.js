// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

let myName = "koushik saha";

let capitalize = (myName) => {
  return myName.toLocaleUpperCase();
};
let holdResult = capitalize(myName);
console.log(holdResult);
