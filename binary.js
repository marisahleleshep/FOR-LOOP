
// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num1 = [2,8,0,23,5,45,76]
// Target = 23
function arrays(num1,target){
    let left=0
    let right=num1.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(num1[middle]===target){
            return middle
        }
        else if(num1[middle]>target){
            right=middle-1
        }
        else{
            left=middle+1
        }
    }
    return null
}
let num1 = [2,8,0,23,5,45,76]
let target3 = 23
console.log(arrays(num1,target3))




// Given the following array, search for the following target
// let target = 24
// let num = [1,4,7,12,67,90];

function binary(num,target){
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
let num = [1,4,7,12,67,90];
let target=24
console.log(binary(num,target))

// Given the following array, search for the following target
// let target = 122
// let array = [76,86,122,345,678,];
function search(array,target){
    let left=0
    let right=array.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(array[middle]===target){
            return middle
        }
        else if(array[middle]>target){
            right=middle-1
        }
        else{
            left=middle+1
        }
    }
    return null
}
let target1 = 122
let array = [76,86,122,345,678,];
console.log(search(array,target1))


// Given a sorted array of integers that may contain duplicates, 
// write a JavaScript program to find the index of the first or 
// last occurrence of a particular element in the array using binary search.
function sorted(arr,target){
    let left=0
    let right=arr.length-1
    let result=-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(arr[middle]===target){
            return middle
        }
        else if(arr[middle]>target){
            right=middle-1
        }
        else{
            left=middle+1
        }
    }
    return result
}
let target2=12
let arr=[1,2,2,3,4,4,7,8,9,9,12,12]
console.log(sorted(arr,target2))














