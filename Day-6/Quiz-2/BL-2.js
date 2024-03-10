/*
// Reverse an array? Input: [1, 2, 3, 4, 5, 6]
arr = [1, 2, 3, 4, 5, 6];
arr1 = [];
arr.forEach((element) => {
  arr1.unshift(element);
});
console.log(arr1);
*/

/*
// Explain the properties of the join array method function via program?
const arr = [1, 2, 3, 4];

console.log(arr.join()); // Output :- 1,2,3,4

console.log(arr.join(" - ")); // Output :- 1 - 2 - 3 - 4

console.log(arr.join("--")); // Output :- 1--2--3--4
*/

//Merge to sets in javascript?
const set1 = new Set(["one", "two"]);
const set2 = new Set(["three"]);
const set3 = new Set([...set1, ...set2]);
console.log(set3); // {'one', 'two', 'three'}
