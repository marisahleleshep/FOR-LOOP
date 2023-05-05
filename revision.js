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


const v=[2,13,4,45,90]
v.sort(function(a,b){
  return b-a
})
console.log(v)


function myName(nam){
  let newArr=[]
  for(let i= nam.length-1;i>=0; i--){
    newArr+=nam[i]

  }
  return newArr
  
}
let arry="Hello"
console.log(myName(arry))

// Write a function that takes an array of integers and returns the sum of all the even numbers in the array.
function integers(int){
  sum=0
  for(let i=0;i<int.length;i++){
    if(int[i]%2===0){
      sum+=int[i]
    }
  }
  return sum
 
}
let num=[12,7,90,2]
console.log(integers(num))

// Write a function that takes an array of integers and returns the sum of all the odd numbers in the array.
function oddNumbers(num){
  sum=0
  for(let i=0;i<num.length;i++){
    if(i%2!==0){
      sum+=num[i]
    }
  }
  return sum
}
let num1=[1,3,4,6,7,8]
console.log(oddNumbers(num1))


// Write a function that takes an array of integers and returns the largest number in the array.

function oddNumber(math){
  sum=0
  for(let i=0;i<math.length;i++){
    if(math[i]>sum){
      sum=math[i]
    }
  }
  return sum
}
let number=[1,3,5,12,45,66]
console.log(oddNumber(number))

// Write a function that takes an array of integers and returns a new array with all the even numbers removed.

function evenNums(num1){
  let empty=[]
  for(x in num1){
    if(x%2!=0){
      empty.push(x)
    }
  }
  return empty
}
let nam=[1,12,3,4,56,7,8,13]
console.log(evenNums(nam))

// Write a function that takes an array of integers and returns a new array with all the duplicates removed.
function intArr(arr){
  let empty=[]
  for(let i=0;i<arr.length;i++){
    if(empty.indexOf(arr[i]) === -1){
      empty.push(arr[i])
    }
  }
  return empty
}
let y1=[1,2,2,4,5,5,9]
console.log(intArr(y1))

//Changing an array into a string
function arrays(arr){
  return arr.join( )
}
let p=["apple","mango","banana"]
console.log(arrays(p))

//without using inbult function
function array(arr){
  let newAr=[]
  for(let i=0;i<arr.length;i++){
    if(newAr !=arr[i]){
      newAr.push(i)
    }
  }
  return newAr
}
let k=["12","24","90","34"]
console.log(array(k))


