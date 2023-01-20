// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// - 4 > 3
// - 4 >= 3
// - 4 < 3
// - 4 <= 3
// - 4 == 4
// - 4 === 4
// - 4 != 4
// - 4 !== 4
// - 4 != '4'
// - 4 == '4'
// - 4 === '4'
// - Find the length of python and jargon and make a falsy comparison statement.

// console.log();

console.log(-4 > 3); // -4 > 3 , it is false  🙂
console.log(-4 >= 3); // -4 >= 3 , it is false  🙂
console.log(-4 < 3); // -4 >= 3 , it is true  🙂
console.log(-4 <= 3); // -4 >= 3 , it is false  🙂, result showing true ,but i think it is false because -4 not equal to 3. less than part is true.
console.log(-4 == 4); // -4 >= 3 , it is false  🙂

console.log(-4 === 4); // -4 >= 3 , it is false  🙂

console.log(-4 != 4); // -4 >= 3 , it is true  🙂
console.log(-4 !== 4); // -4 >= 3 , it is true  🙂
console.log(-4 != "4"); // -4 >= 3 , it is true  🙂
console.log(-4 === "4"); // -4 >= 3 , it is false  🙂
console.log(-4 == "4"); // -4 >= 3 , it is false  🙂

// - Find the length of python and jargon and make a falsy comparison statement.

let python = "python";
let jargon = "jargon";

let result = python.length == jargon.length;
console.log(result);
// it is true, the lenght is same.
