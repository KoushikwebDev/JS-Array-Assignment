// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt("Enter triangle base");
let height = prompt("Enter triangle height");

let area = 0.5 * Number.parseInt(base) * Number.parseInt(height);
console.log(`The area of triangle is ${area} cm square`);
