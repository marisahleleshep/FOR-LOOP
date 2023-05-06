// Given an array of strings, use a function to reverse all the elements in the 
// string in ascending order and the specific elements in descending order
function reversedStr(arr,indices){
    arr = arr.map(str => str.split('').reverse().join('')).sort();
    
    for(let i=0;i<arr.length;i++){
        if(indices[i]<arr.length){
            const arr = arr[indices[i]].split('').reverse().join('');
      arr[indices[i]] = str;

        }
    }
    return str
}
console.log(reversedStr("Hello"))


// Given an array of objects, each object representing a person with a name and age property, 
// write a function that returns the sum of all people who are less than 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

function sumOfAge(people) {
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
      if (people[i].age < 18) {
        sum += people[i].age;
      }
    }
    return sum;
  }
  console.log(sumOfAge(people))

//   Using JS functions and an array of numbers, return positive if an element 
//   within the array is positive, negative if an element is negative, else zero
function positive_element(num){
    let sum=0
    for(let i=0;i<num.length;i++){
        if(num[i]>0){
            return "positive"
            break;
            
        }
        else{
            return "negative"
            break;
        }
    }
}
console.log(positive_element(num))

// Given an array of objects, where each object represents an employee with an id, name, and salary
// property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
const employees = [
    { id: 123456, name: 'Marisah', salary: 7000 },
    { id: 39456, name: 'Annet', salary: 90000 },
    { id: 37869, name: 'Leila', salary: 18000 },
    { id: 24563, name: 'Vicky', salary: 50000 },
  ];

  function employeesSalary(employees) {
    const sortedEmployees = employees.slice().sort((a, b) => {
      return a.salary - b.salary;
    });
    return sortedEmployees;
  }
console.log(employeesSalary(employees))
