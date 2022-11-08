/*
1
Correct the syntax error
 [ 1,7  ,9,  45 ]

 ["Str" , "alex","moh"]

 ['the','fox' ,'over', 'lazy', 'dog'  ]

*/






/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

1

0

*/






/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

// let favArray = [ ["Rice", "Tomato", "Potato", "Chicken", "Meat"] , ["Football", "Basketball", "Tennis"], ["The Godfather", "Twelve Angry Man", "The Dark Knight 2008", "Inception"] ];








/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// function firstOfArray (array){
//   return array[0]
// }

// console.log(firstOfArray(favArray));









/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/


// function lastOfArray (array){
//   return array[ array.length - 1]
// }

// console.log(lastOfArray([1, 2, 3 ,4 ,6]));









/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,2,3,4,6,8,10]
*/

// var array = [0,5,7,9];

// var zeroIndex = array.shift();

// array.unshift(1,2,3,4);

// array.unshift(zeroIndex)

// var nineIndex = array.pop()

// var sevenIndex = array.pop()

// array.push(6 , sevenIndex , 8 , nineIndex , 10);

// console.log(array);











/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


// var array2 = [5 , 9 ,-7 , 3.5 ];

// console.log(array2.push(200));
// console.log(array2);
// console.log(array2.unshift(100));
// console.log(array2);
// console.log(array2.pop());
// console.log(array2);
// console.log(array2.shift());
// console.log(array2);









/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/



// function middleOfArray (array) {
//   if ( array.length % 2 == 0){
//     return array.splice(array.length/2 - 1 , array.length/2 )
//   }
//   else {
//     return array[Math.floor(array.length/2)]
//   }
// }

// console.log(middleOfArray(["t","u","x"]));








/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [ 5,-22 ,3.5 ,44 ,98 ,44 ]
*/
// var animals = []
// animals[0] = "cat";
// animals[1] = "caaaaat";

// var animals = ['cat', 'ele', 'bird'];

// console.log(animals);










/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/


// function indexOfArray (array , index) {
//   return array[index]
// }
// console.log(indexOfArray(animals , 2));










/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/


// function arrayExceptLast(array){
//   array.pop()
//   return array
// }
// console.log(arrayExceptLast([1,2,3,8,9]));









/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

// var nums= [1,2,3,8,9]

// function addToEnd (array, value){
//   array.push(value);
//   return array
// }
// console.log(addToEnd(nums,55));











// all the exercises below should solved 2 times: 1- for loop 2- while lopp

/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



// var nums= [1,2,3,8,9];

// function sumArray (array){
//   let x = 0;
//   for ( i=0 ; i < array.length ; i++ ) {
//     x += array[i];
//   }
//   return x
// }

// console.log(sumArray(nums));


// function sumArray1 (array){
//   let x = 0;
//   let i = 0;
//   while ( i < array.length ){
//     x += array[i];
//     i++
//   }
//   return x 
// }

// console.log(sumArray1(nums));











/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// var nums= [-1,1,2,3,8,9,-3]

// function minInArray ( array ){
//   let x = [array[0]]
//   for ( i=0 ; i < array.length ; i++ ){
    
//     if ( array[i] <= x[0] ){
//       x.unshift(array[i])
//     }
//   }

//   return x[0];
// }

// console.log(minInArray(nums));











/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// var nums= [1,2,3,8,9]

// function removeFromArray ( array, value ){
//   let x = []
  
//   for ( i=0 ; i < array.length ; i++ ){
//     if (array[i] !== value ){
//       x.push(array[i])
//     }
//   }
//   return x
    
// }

// console.log(removeFromArray(nums, 8));

