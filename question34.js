// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// JavaScript program to find solution
// of ax + by - n = 0;

let linerEquationsSolver = (a, b, n) => {
  // traverse for all possible values
  for (let i = 0; i * a <= n; i++) {
    // check if it is satisfying the equation
    if ((n - i * a) % b == 0) {
      console.log("x = " + i + ", y = " + (n - i * a) / b);

      return;
    }
  }

  console.log("No solution");
};

let a = 2,
  b = 3,
  n = 7;
linerEquationsSolver(a, b, n);
