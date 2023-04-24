// Write a function that takes an array of strings as input and returns a new array with the strings converted to uppercase.
function names(str){
    return str.toUpperCase()
}
let arr="marisah"
console.log(names(arr))



// Write a function that takes an array of strings as input and returns a 
// new array with the first letter of each string capitalized.
function array(arr){
        return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
      
  
}
let items=["mango","lemon"]
let input=array(items)
console.log(input)

// Write a function that takes an array of numbers as input and 
// returns the sum of all the numbers.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
const names1 = [1, 2, 3, 4, 5];
const sum = sumArray(names1);
console.log(sum);

// Write a function that takes an array of strings as input and returns a 
// new array with only the strings that have a length greater than 5.
function arrayInput(str){
    const filtered = str.filter(arr => arr.length > 5);
    return filtered

}

const array1 = ['apple', 'banana', 'cherry', 'mangoes', 'kiwi','guavo'];
const filteredArr = arrayInput(array1);
console.log(filteredArr);

// Write a function that takes two arrays as input and returns a new 
// array with the elements that are common to both arrays.
function elements(arr1, arr2) {
    const commonElements = arr1.filter(element => arr2.includes(element));
    return commonElements;
  }
const array5 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = elements(array5, array2);
console.log(commonElements)
