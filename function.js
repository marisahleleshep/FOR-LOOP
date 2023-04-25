// Write a function that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
let arr = [1, 2, 3, 4, 5];
let sum = sumArray(arr);
console.log(sum);

// Write a function that takes an array of strings as input and returns a new array with only the strings that start with the letter "a".
function filterNames(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === 'a') {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

const arr1 = ['apple', 'banana', 'avocado', 'orange'];
const newArr = filterNames(arr1);
console.log(newArr);

// Write a function that takes an array of numbers as input and returns a new array with the numbers sorted in descending order.
function numbers(num){
    const sortedArr = arr.slice().sort((a, b) => a - b);
    return sortedArr;
}

const num = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = numbers(num);
console.log(sortedArr);

// Write a function that takes an array of numbers as input and returns the index of the first number 
// that is divisible by 3. If no number is divisible by 3, the function should return -1.
function divide(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0) {
        return i;
      }
    }
    return -1;
  }
  const arr2 = [2, 4, 5, 6, 7, 8, 9];
const num1 = divide(arr2);
console.log(num1)
