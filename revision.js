// How do we return the number of vowels in a string
function numbers(str){
    let vowels="aeiou"
    let count=0
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(numbers("akirachix"))


// Print all even numbers from 0 – 10

for(let i=0;i<=100;i++){
    if(i%2===0){
        console.log(i +"even numbers")
    }
    else{
        console.log(i+"odd numbers")
    }
}

// Sort an array of numbers  from lowest to highest

let arr = [5, 3, 8, 1, 2];
arr.sort(function(a, b) {
  return a - b;
});

console.log(arr);



// Calculate the sum of numbers within an array
let y=[2,3,1,6,5,8,7]
let sum=0
for(let i=0;i<y.length;i++){
    sum+=y[i]
}
console.log(sum)

// . Create a function that reverses an array

let arr1 = [5, 3, 8, 1, 2];
let reversedArr = arr1.reverse();

console.log(reversedArr);

// Create a function that filters out negative numbers

function filterNegativeNumbers(arr2) {
    let result = [];
  
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] >= 0) {
        result.push(arr2[i]);
      }
    }
  
    return result;
  }
  
  let arr2 = [-2, 5, -3, 8, 1, -4, 2];
  let filteredArr = filterNegativeNumbers(arr2);
  
  console.log(filteredArr);

//   Create a length converter function
