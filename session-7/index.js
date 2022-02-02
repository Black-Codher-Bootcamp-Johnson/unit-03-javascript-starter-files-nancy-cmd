// ****************************************************TASK 1****************************************************

const animals = ['dog','lion', 'tiger', 'lima', 'wolf'];

/*animals.push('cat');//the push adds an element to the end of the array
animals.unshift('zebra');// unshift adds an element to the beginnning of the array*/
animals.pop(); // pop method removes the last element from an array and returns that element, this method changes the length of the array.

console.log(animals);








// ****************************************************TASK 2****************************************************
const names = ['James', 'Peter', 'Katnis', 'John', 'Sally', 'Jane', 'April', 'Meredith', 'Derek', 'Avery']
names.sort();
console.log(names);

names.reverse();
console.log(names);



const bonus = [5, 325, 67, 100000, 150]

bonus.sort();
console.log(bonus);//starts with 10000 because it looks at the first number and determines which number comes first in numerical order.

// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? true : false;
}
