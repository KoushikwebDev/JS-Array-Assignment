// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date = new Date();

// - YYYY-MM-DD HH:mm 😎

let newDateTime = `Date is :${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()} and Time is : ${date.getHours()}:${date.getMinutes()}`;

console.log(newDateTime);

//  - DD-MM-YYYY HH:mm 😎

let newDateTime2 = `Date is :${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()} and Time is : ${date.getHours()}:${date.getMinutes()}`;

console.log(newDateTime2);

//   - DD/MM/YYYY HH:mm 😎

let newDateTime3 = `Date is :${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()} and Time is : ${date.getHours()}:${date.getMinutes()}`;

console.log(newDateTime3);
