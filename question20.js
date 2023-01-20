// 20. Write a code which can give grades to students according to theirs scores:
//     - 90-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let checkGrade = (num) => {
  if (num > 100) console.log("Please Enter Valid Marks.");
  else if (num >= 90) console.log("Your grade is A.");
  else if (num >= 70) console.log("Your grade is B.");
  else if (num >= 60) console.log("Your grade is C.");
  else if (num >= 50) console.log("Your grade is D.");
  else if (num < 50) console.log("You Failed.");
};

checkGrade(89);
checkGrade(50);
checkGrade(49);
