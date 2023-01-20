// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

let text =
  "I want to be a programmer because of me, i found it interesting. And got a job because of my skills";

let result = text.indexOf("because");
console.log(result);

// or lastindexof

let result2 = text.lastIndexOf("because");
console.log(result2);
