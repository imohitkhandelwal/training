//Write code implementations for the following array methods:
/*
// 1. forEach :
const arr = [1, 3, 5, true, 12, 13];

arr.forEach((element) => {
  console.log(element);
});
*/

/*
// 2. map()
const arrToMap = [1, 2, 4, 8];

const mappingFunc = (x) => Math.pow(x, 3);

console.log(arrToMap.map(mappingFunc)); // [ 1, 8, 64, 512 ]
*/

/*
//3. filter
const userAges = [12, 23, 22, 18, 19, 61];

const isEligible = (age) => age >= 18;

const result = userAges.filter(isEligible);

console.log(result); // [ 23, 22, 18, 19, 61 ]
*/

/*
// 4. reduce
const nums = [15.5, 2.3, 1.1, 4.7];

const getSum = (total, num) => {
  return total + Math.round(num);
};

console.log(nums.reduce(getSum, 0)); // 24
*/

/*
//5. includes
const pets = ["Dogs", "Cats", "Horses"];

console.log(pets.includes("Fishes")); // false

console.log(pets.includes("Cats")); // true
*/

/*
// 6. some
const ages = [12, 23, 22, 18, 19, 61];

const checkAges = (age) => age >= 18;

console.log(ages.some(checkAges)); // true
*/

/*
//7. every
const ages = [12, 23, 22, 18, 19, 61];

const checkAges = (age) => age >= 18;

console.log(ages.every(checkAges)); //false
*/

/*
//Q>2 : Simple array implementation.
const arr = new Array(12, 15, 18);

console.log(arr);

// This also works.

const arr2 = [];

arr2.push(10);
arr2.pop();
arr2.push(20);

console.log(arr2); // 20
*/

//Todo List Task:
let ToDo = [];
let Completed = [];

function add(title) {
  if (title.trim() === "") {
    return -1;
  }

  let id = ToDo.length + 1;
  ToDo.push({ id: id, title: title });
  return id;
}

function remove(id) {
  let index = ToDo.findIndex((task) => task.id === id);
  if (index !== -1) {
    ToDo.splice(index, 1);
    return true;
  }
  return false;
}

function update(id, title) {
  let task = ToDo.find((task) => task.id === id);
  if (task) {
    task.title = title;
    return true;
  }
  return false;
}

function markAsCompleted(id) {
  let index = ToDo.findIndex((task) => task.id === id);
  if (index !== -1) {
    let completedTask = ToDo.splice(index, 1)[0];
    Completed.push(completedTask);
    return true;
  }
  return false;
}

console.log("Add task:", add("Learn JavaScript"));
console.log("Add task:", add("Do groceries"));

console.log("ToDo:", ToDo);

console.log("Remove task:", remove(2));

console.log("ToDo after removal:", ToDo);

console.log("Update task:", update(1, "Master JavaScript"));

console.log("ToDo after update:", ToDo);

console.log("Mark as completed:", markAsCompleted(1));

console.log("ToDo after marking as completed:", ToDo);

console.log("Completed:", Completed);
