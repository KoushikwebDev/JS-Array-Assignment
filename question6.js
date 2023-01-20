// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let newString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

let intoArray = function (newString) {
  return newString.split(",");
};
let newArr = intoArray(newString);
console.log(newArr);
