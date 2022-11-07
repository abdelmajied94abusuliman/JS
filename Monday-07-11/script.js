/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

// let children = prompt("Enter number of your Children");
// let partnerName = prompt("Enter your partner name");
// let area = prompt("Enter your location");
// let job = prompt("Enter your job");

// function tellFortune (numOfChildren , nameOfPartner , geoLocation , jobTitle) {
//     console.log(`You will be ${jobTitle} in ${geoLocation}, and married to ${nameOfPartner} with ${numOfChildren} kids`);
// }

// tellFortune(children, partnerName, area, job)

// -----------------------------------------------------

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

// function calculateDogAge (yourPuppyAge) {
//     console.log(`Your doggie is ${yourPuppyAge*7} years old in dog years!`);
// }

// calculateDogAge(16)

// -----------------------------------------------------

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// function calculateSupply (age, amountPerDay ) {
//     let resetOfAgePerDay = (100 - age)*365 ;
//     console.log(`You will need ${resetOfAgePerDay*amountPerDay} cups of tea to last you until the ripe old age of 100`);
// }

// calculateSupply( 30 , 2 )

// -----------------------------------------------------

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// greet("Obaida")

// -----------------------------------------------------

/*
5
what is the error:
function double(cat) {
  return 2 * x; // X is undefined
}

function double(7) { // You cann't use number or string as parameter
  return 2 * 7; 
}

function double('7') { // You cann't use number or string as parameter
  return 2 * 'x';
}
*/

// -----------------------------------------------------

// 6

// function double1(x) {
//   return 2 * x ;
// }

// function double2 (x) {
//     return 2 * x;
// }

// function double3 (x) {
//   return 2 * x;
// }

// -----------------------------------------------------

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

// function cube(number){
//     console.log(Math.pow(number,3));
// }

// cube(4)

// -----------------------------------------------------

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

// function multiply(num1 , num2){
//     console.log(num1*num2);
// }

// multiply(3,9)

// -----------------------------------------------------

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

// function canIGetADrivingLicense (age){
//     if ( age < 20 ) {
//         console.log(`please come back after ${20 - age} years to get one`);
//     }else {
//         console.log("yes you can");
//     }
// }

// canIGetADrivingLicense(18)

// -----------------------------------------------------

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

// function sameLength (str1, str2) {
//     if (str1.length === str2.length){
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// sameLength("tree", "clue")

// -----------------------------------------------------

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

// function largerNubmer(num1 , num2){
//     if ( num1 > num2 ){
//         return num1
//     }
//     else {
//         return num2
//     }
// }

// console.log(largerNubmer(5,6));

// -----------------------------------------------------

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

// function smallerNubmer (num1 , num2 , num3){
//     if ( num1 < num2 ){
//         if ( num1 < num3 ){
//             console.log(num1);
//         }
//         else {
//             console.log(num3);
//         }
//     }
//     else {
//         if ( num2 < num3 ){
//             console.log(num2);
//         }
//         else {
//             console.log(num3);
//         }
//     }

//     console.log(Math.min(num1 , num2 , num3));

// }

// smallerNubmer ( Number(prompt("Enter num1")) , Number(prompt("Enter num2")) , Number(prompt("Enter num3")) )

// -----------------------------------------------------

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

// function shorterString (str1, str2, str3, str4, str5){

//     let stringArray = [str1 , str2, str3, str4, str5];
//     stringArray.sort(function (a, b){ return a.length - b.length})
//     console.log(stringArray);
// }

// shorterString( "Cameeeel", "Horses", "Duccccccccck", "Cammmmmel", "Cat")

// -----------------------------------------------------

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

// function scoreInUniversty (degree){
//     if (degree <= 100 && degree >94 ) {
//         console.log(`A`);
//     }
//     else if (degree <= 94 && degree >84 ){
//         console.log(`B`);
//     }
//     else if (degree <= 84 && degree >69 ){
//         console.log(`C`);
//     }
//     else if (degree <= 69 && degree >49 ){
//         console.log(`D`);
//     }
//     else if (degree <= 49 && degree >0 ){
//         console.log(`F`);
//     }
//     else {
//         console.log(`You enter a wrong degree`);
//     }
// }

// scoreInUniversty(130)

// -----------------------------------------------------

/*
23 + 24
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

/*
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

// var num = 0;
// function counter (){
//     num++
//     console.log(num);
// }

// function resetCounter (){
//     console.log(`${num} the counter reset now`);
//     num = 0;
// }

// counter()
// counter()
// counter()
// counter()
// counter()
// resetCounter()
// counter()
// counter()
// counter()
// resetCounter()
