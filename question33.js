// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
//     Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
//     Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more.

// calculate BMI 😎😎

let BMI = (weight, height) => {
  if (typeof weight == "number" && typeof height == "number") {
    let m = height / 3.2808;

    let bmi = weight / (m * m);
    let compressedM = new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(bmi);
    if (bmi < 18.5) return `Underweight, BMI is: ${compressedM}`;
    else if (bmi < 24.9 && bmi > 18.5) return `Normal, BMI is: ${compressedM}`;
    else if (bmi < 29.9 && bmi >= 25)
      return `Overweight, BMI is: ${compressedM}`;
    else if (bmi > 30) return `Obese, BMI is: ${compressedM}`;
  } else {
    return `Enter valid Height and Weight.`;
  }
};

let returnValue = BMI(50, 6);
console.log(returnValue);
