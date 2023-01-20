// 28. Use for loop to iterate from 0 to 100 and print only prime numbers .

let printPrimeNumber = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

printPrimeNumber(100);
