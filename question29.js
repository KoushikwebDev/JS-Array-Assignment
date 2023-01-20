// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let printSumofEvenandOddNumber = (num) => {
  let sumofOddNumber = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
      if (i % 2 !== 0) {
        sum = sum + i;
      }
    }
    console.log("Sum of Odd Numbers : " + sum);
  };
  sumofOddNumber(num);

  let sumofEvenNumber = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
      if (i % 2 == 0) {
        sum = sum + i;
      }
    }
    console.log("Sum of Even Numbers : " + sum);
  };
  sumofEvenNumber(num);
};
printSumofEvenandOddNumber(100);
