// 23. Write a program which tells the number of days in a month, now consider leap year.

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
let monthNumber = 2;
let year = 2012;
let result = daysInMonth(monthNumber, year); // 29
console.log(result);
