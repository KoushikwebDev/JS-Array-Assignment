// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let typeofNumber = (num) => {
  let result = num % 2 === 0 ? "Number is Even." : "Number is Odd.";
  return result;
};

let getValue = typeofNumber(3);
console.log(getValue);
