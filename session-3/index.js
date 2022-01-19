// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a = 5;
const b = 10;
let c = a + b;

console.log('Original output: ' + c);

a = 20;

console.log("After 'a' has been updated: " + c);

c = a + b;

console.log("After 'c' has been updated to use the new 'a' value: " + c);


// task 2 function

function sayHey() {
    console.log('Hey!');
}
function conversation() {
    sayHey();
    console.log('How are you?');
    console.log('Goodbye');
}
console.log(conversation());

//task 3 adding parameters to the function

function futureAge(name, currentAge) {
    const age = currentAge + 5;
    console.log("Hi, " + name + " You will be " + age + " years old in 5 years");
}