// Using a for loop print all even numbers up to and including n. Don’t include 0.
let num=22;

for(let i=0; num<22; i++){
    num+=2
    console.log(num)
   
}
let i=0;
while(i<22){
    i+=2
    console.log(i)
}

// Using a for loop output the elements in reverse order

let array=[1,2,3,4,5,6,7,8]
for(let i=array.length-1; i>=0; i--){
    console.log(array[i])
}

// Write a function that takes in a string and returns it when reversed
// let food = "eating"

function reverseStr(str) {
    return str.split("").reverse().join("");
  
  }
   let food = "eating";
  let reversedFood = reverseStr(food);
  console.log(reversedFood)


//   Given a string change the every second letter to an uppercase ‘Z’. 
//Assume there are no space.



//Using a for loop output the elements in reverse order
const arr=[3,4,5,2,3,12,55,82]
const emptyArray=[]
for(let i=arr.length-1;i>=0;i--){
    const x=arr[i]
    emptyArray.push(x)

}
console.log(emptyArray)


//Get the sum of two arrays…actually the sum of all their elements.
//P.S. Each array includes only integer numbers. Output is a number too.
let array1=[1,2,5,9,6,4,12,78]
let array2=[23,8,90,65,5]

let x=0;
for(let i=0;i<array1.length;i++){
    x+=array1[i]
}
for(let i=0;i<array2.length;i++){
    x+=array2[i]
}
console.log(x)


// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
function sumArray(arr,arr1){
    let sum=0
    for(let i =0;i<arr.length;i++){
        sum+=arr[i]
    }
    for(let i =0;i<arr1.length;i++){
        sum+=arr1[i]
    }
    return sum
}
let num1=[1,2,3,4,5]
let num2=[1,2,3,4,5]
console.log(sumArray(num1,num2))
// Write a function that uses while, if and continue statements to print all the even numbers between 0 and 50. 
// function evenNums(){

// }
// // Write a function that takes an integer argument and prints "Prime" if the number is prime, and "Not prime" if the number is not prime.
// Write a function that takes a list of integers as input and prints the sum of all the even numbers in the list.
// Write a function that takes any two integers as input, and prints the sum of all the numbers between the two integers (inclusive) that are divisible by 3.












