// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();

// year 😎
console.log(date.getFullYear());

// month 😎
console.log(date.getMonth() + 1);

// date 😎
console.log(date.getDate());

// day 😎
console.log(date.getDay() + 1);

// hour 😎
console.log(date.getHours());

// minutes 😎
console.log(date.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.😎

const MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  //   console.log(utc1);
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  //   console.log(utc2);

  let result = Math.floor((utc2 - utc1) / MS_PER_DAY);
  console.log(result);
  return result;
}

const a = new Date("1970-01-01");
const b = new Date("2022-07-25");
difference = dateDiffInDays(a, b);
console.log(
  ` Numbers of seconds elapsed from January 1, 1970 to now ${
    difference * (24 * 3600)
  } and day is ${difference}`
);
