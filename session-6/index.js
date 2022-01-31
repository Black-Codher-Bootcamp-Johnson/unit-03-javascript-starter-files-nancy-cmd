// Use this randomNumber inside of the while/for loops to generate a random number
//const randomNumber = Math.round(Math.random() * 10);
let count = 1;

// ****************************************************TASK 1****************************************************
while (count < 10) {
    const randomNumber = Math.round(Math.random() * 10);
   count = count + 1
  console.log('this is a random number ' + randomNumber);
}


/*let sales = 10;

while (sales <= 100) {
  sales++;
  console.log('we sold ' + sales);
}*/


for (let sales = 10; sales <= 100; sales++) {
  console.log('we sold ' + sales);
}






// ****************************************************TASK 2****************************************************

for (let count = 1; count <= 10; count++) {
  const randomNumber = Math.round(Math.random() * 10);
  console.log('this is count ' + randomNumber);
}


/*
for (let number = 1; number <= 10; number++) {
  console.log('for this number ' + number)
}*/

let number = 1;
while (number <= 10) {
  number++;
  console.log('while this number ;) ' + number)
}



