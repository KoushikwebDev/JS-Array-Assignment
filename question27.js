// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use  abs() method.

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age 😎😎

// max
let findMax = (items) => {
  let max = 0;
  items.map((x) => {
    if (x >= max) {
      max = x;
    }
  });
  return max;
};
let holdValue = findMax(ages);
console.log(holdValue);

// min
let findMin = (items) => {
  let min = items[0];
  items.map((x) => {
    if (x <= min) {
      min = x;
    }
  });
  return min;
};
let holdValue2 = findMin(ages);
console.log(holdValue2);

// by reduce 😎😎

let findMax1 = (items) => {
  let getMax = items.reduce((acc, ele) => {
    if (ele >= acc) {
      acc = ele;
    }
    return acc;
  }, 0);
  return getMax;
};
let holdValue3 = findMax1(ages);
console.log(holdValue3);

//  Find the range of the ages(max minus min) 🙄🙄

let range = (arr) => {
  let max = findMax(arr);
  let min = findMin(arr);
  return (difference = max - min);
};

let getRange = range(ages);

console.log(getRange);

//  Compare the value of (min - average) and (max - average), use  abs() method. 🙄🙄

let compare = (arr) => {
  let maxMinusmin = range(arr);
  let max = findMax(arr);
  let min = findMin(arr);
  let minMinusmax = min - max;
  return Math.abs(maxMinusmin - minMinusmax);
};

let getCompareValue = compare(ages);
console.log(getCompareValue);

//  - Find the median age(one middle item or two middle items divided by two) 🙄

const agesList = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let findMedian = (arr) => {
  let mid = Math.floor(arr.length / 2);

  return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};
let value = findMedian(agesList);
console.log(value);

//  Find the average age(all items divided by number of items) 🙄

let averageAge = (arr) => {
  let totalItems = arr.length;
  let sum = 0;
  for (let ele of arr) {
    sum = sum + ele;
  }
  let average = sum / totalItems;
  return average;
};

let getValue = averageAge(agesList);
console.log(getValue);
