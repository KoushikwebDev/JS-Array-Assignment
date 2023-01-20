// 35. Write a functions which checks if all items are unique in the array.

let myArr = [1, 2, 33, 45, 56, 77, 1, 33];
let newArr = [1, 2, 3, 4, 5];

let checkUnique = (arr) => {
  return arr.length === new Set(arr).size
    ? `Array is Unique.`
    : `Array is Not Unique.`;
};

let returnValue = checkUnique(myArr);
console.log(returnValue);

let returnValue2 = checkUnique(newArr);
console.log(returnValue2);
