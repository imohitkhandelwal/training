/*
// Program 1 : Avg. of array nums[] in javascript

let arr = [98, 95, 87, 79, 55, 100];
function calculateAverage(array) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;

  return avg;
}
console.log(calculateAverage(arr));
*/

/*
// Q.2.: swap of 2 numbers using reference

let a = 15;
let b = 21;
let temp;
temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);
*/

/*
// Q.3 Print the fibonacci series

function fibonacciS(n) {
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

const n = 10;
console.log(fibonacciS(n));
*/

/*
// Q.4: Sort the array in both way (ascending and descending)

// let arr = [98, 95, 87, 79, 55, 100];
// let ascN = arr.sort((f, s) => f - s);
// console.log(arr);

let arr = [98, 95, 87, 79, 55, 100];
let ascN = arr.sort((f, s) => s - f);
console.log(arr);
*/
