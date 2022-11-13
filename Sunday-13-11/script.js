
/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/

// let arrayDouble = [2, 5, 100];

// let newArray = arrayDouble.map(function (ele){
//     return ele * 2
// });

// console.log(newArray);















  /*
   * Exercise 2 : 
   * 
   * Take an array of numbers and make them strings
   *
   * Test Case: 
   *
   * console.log(stringItUp([2, 5, 100]));
   * 
   * Result:
   * ["2", "5", "100"]
  */
  
//   function stringItUp(arr){
    
//     let y = arr.map(function(element){
//         return element.toString()
//     })

//     return y
//   }
  
//   console.log(stringItUp([2, 5, 100]));
  













  /*
   * Exercise 3:  
   * 
   * Capitalize each of an array of names
   *
   * Test Case: 
   *
   * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
   * 
   * Result:
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
  */
  
//   function capitalizeNames(arr){
//     let y = arr.map(function(element){
//         element = element.toLowerCase()
//         let x = element.split("");
//         let firstEle = x[0].toUpperCase()
//         x[0]= firstEle
//         return x.join("")
//     })
//     return y
//   }
  
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));












  
  /*
   * Exercise 4:  
   * 
   * Make an array of strings of the names
   *
   * Test Case: 
   *
   * console.log(namesOnly([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   *   ])); 
   * 
   * Result:
   *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  */
  
//   function namesOnly(arr){
//     let y = arr.map(function(element){
//         return element.name
//     })
//     return y
//   }

//   let x = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
//     ]

//   console.log(namesOnly(x));

















  /*
   * Exercise 5:  
   * 
   * Make an array of strings of the names saying whether or not they can go to The Matrix
   *
   * Test Case: 
   *
   * console.log(makeStrings([
   *    {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ]));  
   * 
   * Result:
   * 
   * ["Angelina Jolie can go to The Matrix", 
   * "Eric Jones is under age!!", 
   * "Paris Hilton is under age!!", 
   * "Kayne West is under age!!", 
   * "Bob Ziroll can go to The Matrix"]
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
   */
  
//   function makeStrings(arr){
//     let y = arr.map(function(element){
//         if (element.age > 18){
//             return `${element.name} can go to the Matrix`
//         } else {return `${element.name} is under age!!`}    
//     })
//     return y
//   }

//   let x = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
//     ]

//   console.log(makeStrings(x));














  /*
   * Exercise 6:  
   * 
   * Make an array of the names in h1s, and the ages in h2s
   *
   * Test Case: 
   *
   * console.log(readyToPutInTheDOM([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ])); 
   * 
   * Result:
   * 
   * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
   * "<h1>Eric Jones</h1><h2>2</h2>", 
   * "<h1>Paris Hilton</h1><h2>5</h2>", 
   * "<h1>Kayne West</h1><h2>16</h2>", 
   * "<h1>Bob Ziroll</h1><h2>100</h2>"]
   */
  
//   function readyToPutInTheDOM(arr){
//     let y = arr.map(function(element){
//         let h1Var = `<h1> ${element.name} </h1>`
//         let h2Var = `<h2> ${element.age} </h2>`
//         return `${h1Var} ${h2Var}`
//     })
//     return y
//   }

//   let x = [
//         {
//             name: "Angelina Jolie",
//             age: 80
//         },
//         {
//             name: "Eric Jones",
//             age: 2
//         },
//         {
//             name: "Paris Hilton",
//             age: 5
//         },
//         {
//             name: "Kayne West",
//             age: 16
//         },
//         {
//             name: "Bob Ziroll",
//             age: 100
//         }
//         ]
  
//   console.log(readyToPutInTheDOM(x));
  
  





















    /*
    * Exercise 7:
    * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
    *
    *
    * Test Cases :
    *   Test Case 1:  valTimesIndex([1,2,3])  
    *   Test Case 2:  valTimesIndex([1,-2,-3]) 
    * 
    * Result
    * Test Case 1: [0,2,6]
    * Test Case 2: [0,-2,-6]
    */
    
    // function valTimesIndex(arr){
    //    let y = arr.map(function(element, index){
    //     return element * index
    //    })
    //    return y
      
    // }
    
    // console.log(valTimesIndex([1,2,3]));
















    /*
    * Exercise 8:
    * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
    * of that key in each object.
    * 
    * Test Case:
    * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
    * 
    * Result:
    * ['Elie', 'Tim', 'Matt', 'Colt']
    */
    


    // let x = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

    // function extractKey(arr, key){
    //    let y = arr.map( function (element){
    //     return element[key]
    //    });
    //    return y
    // }
    
    // console.log(extractKey(x , 'name'));

    















    /*
    * Exercise 9:
    * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
    * 
    * Examples:
    * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
    */
    
//    function extractFullName(arr){
//       let y = arr.map(function(element){
//         return `${element.first} ${element.last}`
//       })
//       return y
//    }

//    let x =[{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]

//    console.log(extractFullName(x));

















/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
// function doubleValues(arr){
//   let newArray = []
//   let y = arr.forEach(element => { newArray.push(element*2) });
//   console.log(newArray);
// }

// doubleValues([1,2,3])













/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/


// function onlyEvenValues(arr){
//    let newArray = []
//    let y = arr.forEach(element => { 
//    element % 2 == 0 ? newArray.push(element) : element
    
//    });
//    console.log(newArray);
   
// }
// onlyEvenValues([5,1,2,3,10])















/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/


// function showFirstAndLast(arr){
//   let newArray = []
//   let y = arr.forEach(element => {
//     element.split("")
//     let firstAndLast = element[0].concat(element[element.length-1])
//     newArray.push(firstAndLast)
//    });
//    console.log(newArray);
// }

// showFirstAndLast(['colt','matt', 'tim', 'udemy'])















/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/




// let arrayOfObj = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]


// function addKeyAndValue(arr, key, value) {
//   let y = arr.map(function (element){
//     element[key] = value;
//     return element
//   })
//   return y
// }


// console.log(addKeyAndValue(arrayOfObj, 'title' , 'instructor'));


// const addKeyAndValue = (arr, key, value) => arr.map(element => {
//   element[key] = value;
//   return element
// })

// console.log(addKeyAndValue(arrayOfObj, 'title' , 'instructor'));














/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/



// let vowelAlpha = ["a", "e", "i", "o", "u"]

// function vowelCount(str){
  
//   let arr = str.toLowerCase().split("")
//   let a = 1;
//   let e = 1;
//   let i = 1;
//   let o = 1;
//   let u = 1;
//   let vowelA = {};
//   let vowelE = {};
//   let vowelI = {};
//   let vowelO = {};
//   let vowelU = {};

//   for(x=0 ; x < arr.length ; x++){
//     if ( arr[x] == 'a'){
//       vowelA.a = a++;
//     } else if ( arr[x] == 'e'){
//       vowelE.e = e++;
//     } else if ( arr[x] == 'i'){
//       vowelI.i = i++;
//     } else if ( arr[x] == 'o'){
//       vowelO.o = o++;
//     } else if ( arr[x] == 'u'){
//       vowelU.u = u++;
//     } else {
//       continue
//     }
//   }
//   Object.assign(vowelA, vowelE);
//   Object.assign(vowelA, vowelI);
//   Object.assign(vowelA, vowelO);
//   Object.assign(vowelA, vowelU);
//   console.log(vowelA);
// }

// vowelCount('I Am awesome and so are you');