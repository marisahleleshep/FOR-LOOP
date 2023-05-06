// Write a function that takes an array of numbers as input and returns the sum of all the numbers
function addition(nums){
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    return sum
}
let numbers=[2,4,6,12]
console.log(addition(numbers))

// Write a function that takes two numbers as input and returns true if their sum is greater than 100,
// And false otherwise
function greaterNum(num1,num2){
    let sum=num1+num2
    if(sum>100){
        return true
    }
    else{
        return false
    }

}
console.log(greaterNum(12,90))


// Write a function that takes a string as input and returns the number of vowels in the string
function count_vowels(num){
    let vowels="aeiou"
    let sum=0
    for(let i=0;i<num.length;i++){
        if(vowels.includes (num[i])){
            sum++
        }
    }
    return sum 
}
console.log(count_vowels("beautiful"))

// Write a function that takes in a array of numbers as a parameter and returns the second largest number in the array
function numArray(array){
    if(array.length<=1){
        return array
    }
    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return mergsort(numArray(left),numArray(right))
}
function mergsort(left,right){
    emptyArr=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArr.push(left.shift())

        }
        else{
            emptyArr.push(right.shift())
        }
    }
    return [...emptyArr,...left,...right]
}
let array=[12,34,22,9.56,4]
let sort=numArray(array[-2])
console.log(sort)

function number(numss){
    numss.sort(function(m,n){
        return n-m
    })
    return [1]
}
let numss = [10,12,45,32]
console.log(number(numss));

// Write a function that takes a string as a parameter and returns true if the string is a palindrome and false otherwise
function ispalindrome(str){
    reversedStr=str.split("").reverse().join("")
    return str===reversedStr
}
console.log(ispalindrome("mum"))

