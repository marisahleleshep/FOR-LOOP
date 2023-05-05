function numbers(num){
    if(num%1==0 &&num%num==0){
        console.log("is a prime number")
    }
    else{
        console.log("not a prime")
    }
}
numbers(10)

function primeNumber(num1){
    if(num1>0){
        console.log("prime")
    }
    else{
        console.log("is not a prime")
    }
}
primeNumber(2,4,0,1)

//given two strings find the longest string
function nameArr(str1,str2){
    if(str1.length>str2.length){
        return str1
    }
    else{
        return str2
    }
}
   
console.log(nameArr("beutiful","baby")) 