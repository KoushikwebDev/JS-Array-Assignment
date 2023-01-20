// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const promptSync = require("prompt-sync");
let prompt = promptSync();

// Area 😎
let radius = prompt("Enter the radius for area : ");

function area(radius) {
  let r = Number.parseInt(radius);
  let totalAreaofCircle = Math.PI * r * r;
  let roundValue = Math.floor(totalAreaofCircle);
  return roundValue;
}
let result = area(radius);
console.log(result);

// Circumference 😎

let radius1 = prompt("Enter the radius for Circumference  : ");

function area(radius) {
  let r = Number.parseInt(radius);
  let totalAreaofCircle = Math.PI * 2 * r;
  let roundValue = Math.floor(totalAreaofCircle);
  return roundValue;
}
let result1 = area(radius);
console.log(result1);
