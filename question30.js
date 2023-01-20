// 30. Write a script which generates a random hexadecimal number.

let generateHexadecimalNumber = () => {
  let random = Math.floor(Math.random() * 16);
  let hexa = random.toString(16);
  console.log(hexa.toUpperCase());
};

generateHexadecimalNumber();

// or
const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

console.log(genRanHex(6));
console.log(genRanHex(12));
console.log(genRanHex(3));
