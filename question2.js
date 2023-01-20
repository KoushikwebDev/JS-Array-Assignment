// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

let human = {
  firstName: "Koushik",
  lastName: "Saha",
  married: false,
  country: "India",
  age: 24,
};

for (let ele in human) {
  console.log(ele + " : " + human[ele]);
}
