// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

function slope(x1, y1, x2, y2) {
  if (x2 - x1 != 0) {
    return (y2 - y1) / (x2 - x1);
  }
}

let value = slope(x1, y1, x2, y2);
console.log("Slope is " + value);
