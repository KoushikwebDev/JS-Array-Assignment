// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ["india", "bangladesh", "pakistan", "russia", "america"];

let checkandAdd = (item) => {
  if (countries.includes(item)) {
    return item.toUpperCase();
  } else {
    countries.push(item);

    return item.toUpperCase();
  }
};

let result = checkandAdd("Ethiopia");
console.log(result);
console.log(countries);
