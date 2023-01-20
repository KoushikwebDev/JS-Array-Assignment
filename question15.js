// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2.

// when x-intercept 🙂

let y = 0;

//  so x is :

function findx(y) {
  return (y + 2) / 2;
}
let value = findx(y);
console.log(value);

// So the x intercept is at ( 1 , 0 )

// when y-intercept 🙂

let x = 0;
//  so y is :

function findy(x) {
  return 2 * x - 2;
}
let value1 = findy(x);
console.log(value1);

// So the x intercept is at ( -2, 0 )

let x1 = 1;
let y1 = 0;
let x2 = 0;
let y2 = -2;

function slope(x1, y1, x2, y2) {
  if (x2 - x1 != 0) {
    return (y2 - y1) / (x2 - x1);
  }
}

let value3 = slope(x1, y1, x2, y2);
console.log("Slope is " + value3);
