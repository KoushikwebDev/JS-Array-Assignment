// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

// Given array 😎😎
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//1. add 'Meat' in the beginning of your shopping cart if it has not been already added 😍

let addItemtoBegining = (item) => {
  if (shoppingCart.includes(item)) {
    return `already added.`;
  } else {
    shoppingCart.unshift(item);
    return `Item added.`;
  }
};

let result = addItemtoBegining("Meat");
// let result2 = addItem("Meat");

console.log(shoppingCart);
console.log(result);

//2. add Sugar at the end of you shopping cart if it has not been already added 😎

let addItemtoEnd = (item) => {
  if (shoppingCart.includes(item)) {
    return `already added.`;
  } else {
    shoppingCart.push(item);
    return `Item added.`;
  }
};

// let result2 = addItemtoEnd("Sugar");
// console.log(shoppingCart);
// console.log(result2);

// 3.  remove 'Honey' if you are allergic to honey. 😎

let removedItemfromEnd = (item) => {
  if (shoppingCart.includes(item)) {
    shoppingCart.pop();
    return `Item Removed.`;
  } else {
    return `Item does not exits.`;
  }
};

// let result3 = removedItemfromEnd("Honey");
// console.log(shoppingCart);
// console.log(result3);

// 4. modify Tea to 'Green Tea'. 😎

let modifyItem = (item, setItem) => {
  if (shoppingCart.includes(item)) {
    let index = shoppingCart.indexOf(item);
    shoppingCart[index] = setItem;
    return `Item modified.`;
  } else {
    return `Item does not exits.`;
  }
};

let result4 = modifyItem("Tea", "Green Tea");
console.log(shoppingCart);
console.log(result4);
