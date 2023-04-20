
// Write a function that takes in a string and returns it when reversed
// let food = “eating”

function reverseString(str) {
    return str.split("").reverse().join("");
  
  }
   let food = "eating"
  console.log(reverseString(food))

 // Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
 function mergeSort(num){
    if(num.length<=1){
        return num
    }
    let middle=Math.floor(num.length/2)
    let left=num.slice(0,middle)
    let right=num.slice(middle)
    return sortedArray(mergeSort(left),mergeSort(right))
 }
 function sortedArray(left,right){
    let emptyArray=[]
    while(left.length && right.length ){
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
    }
    return [...emptyArray,...left,...right]
 }
 let num1 = [2,8,0,23,5,45,76]
 console.log(mergeSort(num1))


 function binarySearch(num,target){
    let left=0
    let right=num.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(num[middle]===target){
            return middle
        }
        else if(num[middle]>target){
            right=middle-1
        }
        else{
            left=middle+1
        }
    }
    return null
}
let num = [0,2,5,8,23,45,76]
let target = 23
console.log(binarySearch(num1,target))

// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

function leapYear(){
for (let year = 2000; year < 2023; year++) {
    if (year % 4 == 0) {
      console.log(year +"is a leap year");
    }
     else {
      console.log(year +"is not a leap year");
    }
  }
}
leapYear()

// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for(let i=0;i<=100;i++){
  if(i % 3 === 0 && i% 5 === 0){
    console.log("FizzBuzz"+[i])
  }
  else if(i %3 ===0){
  console.log(i+"Fizz")
  }
  else if(i%5===0){
    console.log(i+"Buzz")
  }
  console.log(i)
}


// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.

// let arr=[1,2,3,4,5,6]

function multiplication(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 4);
    }
    
    return result;
  }
  let arr=[1,2,3,4,5,6]
  console.log(multiplication(arr))

//   Write a function that takes in an array of strings and returns an array with 
//every element turned into a number
// 
function TurnNumber(arr1){
  let newArray=[]
for(let i=0;i<arr1.length;i++){

 newArray.push (arr1[i]*1)
}
return newArray
}
let arr1 = ["10","24","45","56","67"]
console.log(TurnNumber(arr1))