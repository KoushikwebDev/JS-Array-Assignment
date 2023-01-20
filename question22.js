// 22. Write a program which tells the number of days in a month.

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February.

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
let monthNumber = 10;
let year = 2022;
let result = daysInMonth(monthNumber, year); // 30
console.log(result);
