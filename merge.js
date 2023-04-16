
    //  Given an array of unsorted numbers, return the index of the following 
     //array when sorted
     function merge(arr){
      if(arr.length<=1){
          return arr
      }
      let middle=Math.floor(arr.length/2)
      let left=arr.slice(0,middle)
      let right=arr.slice(middle)
      return sortedArray(merge(left),merge(right))
  }
  function sortedArray(left,right){
      let empty=[]
      while(left.length&&right.length){
          if(left[0]<right[0]){
              empty.push(left.shift())
      }
      else{
          empty.push(right.shift())
      }
  } 
  return[...empty,...left,...right]  
  }
  let arr =[21,12,45,11,99,1,2]
  console.log(merge(arr))



  // Given an unsorted array of numbers return the sorted array in descending order
  // let array=[123,89,5,23,9,56]

  function mergeSort(array){
    if(array.length<=1){
        return array
    }
    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return sortedArray(mergeSort(left),mergeSort(right))
}
function sortedArray(left,right){
    let emptyArray=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
    }
    else{
        emptyArray.push(right.shift())
    }
} 
return[...emptyArray,...left,...right]  
}
let array =[21,12,45,11,99,15,22,16]
console.log(mergeSort(array).reverse())

// / Given an array of unsorted numbers, return the index of the following target
// if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]

function binary(num){
    if(num.length<=1){
        return num
    }
    let middle=Math.floor(num.length/2)
    let left=num.slice(0,middle)
    let right=num.slice(middle)
    return sortedArray(binary(left),binary(right))
}
function sortedArray(left,right){
    let emptyArray=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
        
    }
    return[...emptyArray,...left,...right]
 
}
// console.log(binary(num,target));
let num = [45,12,6,89,2,5]
console.log(binary(num))



