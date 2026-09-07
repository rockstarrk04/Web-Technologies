console.warn("Arrays");

// todo : Basic of Arrays
// let arr = [100 , 'hi' , true , 10.234 , undefined , [10,203,40]];
// console.log(arr);   // [100, 'hi', true, 10.234, undefined, Array(3)]
// console.log(typeof arr);    // object
// console.log(arr.length);    // 6
// console.log(arr[1]);        // hi
// console.log(typeof arr[1]); // string

// ! Array Modifications  CRUD Operations
// todo : Create an array
// let fruits = ["Apple" , "Banana" , "Orange" , "Mango" , "Kiwi"]


// // todo : Accessing Array Elements
// //* syntax : arrayname[index]

// console.log(`My Favourite Fruit is ${fruits[0]} and ${fruits[3]}`);
// //? My Favourite Fruit is Apple and Mango

// // todo : Add Array elements
// console.log(fruits.length);  //? 5
// //* syntax : arrayname[new_index] = value;

// fruits[6] = "Pine apple"
// console.log(fruits);   //?  ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi', empty, 'Pine apple']
// // fruit[5] becomes empty ,i.e internally its undefined but length of array is updated
// console.log(fruits.length);  //? 7

// // todo : Update Array Elements
// //* syntax : arrayname[index] = update_value;

// fruits[0] = "Guava"  // Apple is updated to Guava
// console.log(fruits);   //? ['Guava', 'Banana', 'Orange', 'Mango', 'Kiwi', empty, 'Pine apple']

// // todo : Delete Array Elements
// console.log(fruits.length);  //? 7
// console.log(fruits);  //? ['Guava', 'Banana', 'Orange', 'Mango', 'Kiwi', empty, 'Pine apple']
// //* syntax : delete arrayname[index];

// delete fruits[0];   
// // here , 0 index element's value is deleted but it creates an empty value but 
// // length of array is not updated 
// console.log(fruits.length);  //? 7
// console.log(fruits);  //? [empty, 'Banana', 'Orange', 'Mango', 'Kiwi', empty, 'Pine apple']

//! Array Programs

// todo : Print all Array elements

// let fruits = ["Apple" , "Banana" , "Orange" , "Mango" , "Kiwi"]
// for (let i = 0 ; i < fruits.length ; i++ ){
//     console.log(`${i} : ${fruits[i]}`);
// }

// todo : Print the fruit if it's length is more than 5
// let fruits = ["Apple" , "Banana" , "Orange" , "Mango" , "Kiwi"]
// for (let i = 0 ; i < fruits.length ; i++ ){
//     if(fruits[i].length > 5){
//         console.log(`${fruits[i]}`);
//     }
// }


// todo : Print the fruit if it's length is more than 5 and add that to the new array
//! My approach
// let fruits = ["Apple" , "Banana" , "Orange" , "Mango" , "Kiwi"]
// let new_array = []
// let j = 0;
// for (let i = 0 ; i < fruits.length ; i++ ){
    
//     if(fruits[i].length > 5){
//         new_array[j] = fruits[i];
//         j++;  
//     }
// }
// console.log(new_array);  //? ['Banana', 'Orange']


// ! Sir's Approach
// let fruits = ["Apple" , "Banana" , "Orange" , "Mango" , "Kiwi"]
// let new_array = []
// for (let i = 0 ; i < fruits.length ; i++ ){
//     if(fruits[i].length > 5){
//         new_array[new_array.length] = fruits[i];
//     }
// }
// console.log(new_array);  //? ['Banana', 'Orange']


// // todo : Print fruit name whose name ends with 'e'
// let fruits = ["Apple" , "Banana" , "Orange" , "Mango" , "Kiwi"]
// let new_array = []
// for(let i = 0 ; i < fruits.length ; i++){
//     if (fruits[i].endsWith('e')){
//         new_array[new_array.length] = fruits[i];
//     }
// }
// console.log(new_array);

// todo : Print fruit name whose name not ends with 'e'
// let fruits = ["Apple" , "Banana" , "Orange" , "Mango" , "Kiwi"]
// let new_array = []
// for(let i = 0 ; i < fruits.length ; i++){
//     if (!fruits[i].endsWith('e')){
//         new_array[new_array.length] = fruits[i];
//     }
// }
// console.log(new_array);


// todo : Print only number from heterogenous array
// let arr = ['hi' , 100 , true , 'hi' , null , 200 , '50']
// let newArray = []
// for (let i = 0 ; i < arr.length ; i++){
//     if (typeof (arr[i]) === 'number'){
//         newArray[newArray.length] = arr[i];
//     }
// }
// console.log(newArray);


// todo : Print only even number from heterogenous array
// let arr = [4,7,9,'6',1,52,8,'2',5]
// let newArray = []
// for (let i = 0 ; i < arr.length ; i++){
//     if (typeof (arr[i]) === 'number' && arr[i]%2 == 0){
//         newArray[newArray.length] = arr[i];
//     }
// }
// console.log(newArray);

// todo : Separate even number and odd number in separate array
// let arr = [4,7,9,'6',1,52,8,'2',5]
// let even_array = []
// let odd_array = []

// for (let i = 0 ; i < arr.length ; i++){
//     if (typeof (arr[i]) === 'number' && arr[i] % 2 == 0){
//         even_array[even_array.length] = arr[i]
//     }
//     else if (typeof (arr[i]) === 'number' && arr[i] % 2 == 1){
//         odd_array[odd_array.length] = arr[i]
//     }
// }
// console.log(even_array);
// console.log(odd_array);

// todo : print sum of all array elements

// let array = [2,5,7,4,6,3]
// sum = 0
// for (let i = 0; i < array.length ; i++){
//     sum += array[i]
// }
// console.log(sum);


// // todo : print sum of all odd array elements

// let array = [2,5,7,4,6,3]
// sum = 0
// for (let i = 0; i < array.length ; i++){
//     if(array[i]%2 == 1){
//         sum += array[i]
//     }
// }
// console.log(sum);

// todo : print sum of all even numbers in heterogeneous array elements

// let array = ['hi' , 100 , true , 'hi' , null , 200 , '50']
// sum = 0
// for (let i = 0; i < array.length ; i++){
//     if(array[i]%2 == 0 && typeof(array[i]) === 'number'){
//         sum += array[i]
//     }
// }
// console.log(sum);

// =============================================================================================
//  05-09-2026


//! Array Methods
// todo : push() : It is used to add the array elements at the ending index and It returns length of the array

// let arr = [10,20,30,40,50]
// console.log(arr);  //? [10, 20, 30, 40, 50]
// let l = arr.push("hi" , true)
// console.log(arr);   //? [10, 20, 30, 40, 50, 'hi', true]
// console.log(l);     //? 7


// todo : pop() : It is used to delete the array element from the last and It returns the deleted array element
// let arr = [10, 20, 30, 40, 50, 'hi', true]
// let x = arr.pop()
// console.log(arr);   //? [10, 20, 30, 40, 50, 'hi']
// console.log(x);     //? true

// todo : unshift() It is used to add the array elements at the starting index and It returns length of the array
// let arr = [10,20,30,40,50]
// let l = arr.unshift("Hi" , true)
// console.log(arr);    //? ['Hi', true, 10, 20, 30, 40, 50]
// console.log(l);      //? 7

// todo : shift() : It is used to delete the array elements from the first occurance and It deletes only 
//                  one element at a time and it returns deleted array element
// let arr = [10,20,30,40,50]
// let y = arr.shift();
// console.log(arr);   //? [20, 30, 40, 50]
// console.log(y);     //? 10


// todo : splice() : It is used to do both operarion like add & delete the array elements & It returns
//                  deleted elements in the form of array
//? Delete array Elements
// let arr = [10,20,30,40,50]
// console.log(arr);     //? [10, 20, 30, 40, 50]
// let d = arr.splice(1,2) 
// console.log(arr);     //? [10, 40, 50]
// console.log(d);       //? [20, 30]


// //? Add array elements
// let arr = [10,20,30,40,50]
// console.log(arr);        //? [[10, 20, 30, 40, 50]
// let a = arr.splice(2,0,"New1","New2")
// console.log(arr);        //? [10, 20, 'New1', 'New2', 30, 40, 50]
// console.log(a);          //? []


// //? Add & delete / update array elements
// let arr = [10,20,30,40,50]
// console.log(arr);        //? [10, 20, 30, 40, 50]
// let a = arr.splice(2,1,"Hi","Bye")
// console.log(arr);        //? [10, 20, 'Hi', 'Bye', 40, 50]
// console.log(a);          //? [30]


// todo : indexOf() , lastIndexOf()
// todo : Both are used to check the index position of array element. But indexOf() return 1st occurance of 
//        matching element & lastIndexOf() returns last occurance of matching element if elements is present
//        & if element is not present it returns -1 value

// let places = ['Goa' , 'Hassan' , 'Bangalore' , 'Goa' , 'Mysore' , 'Goa' , 'Kerala']
// console.log(places);  //? ['Goa', 'Hassan', 'Bangalore', 'Goa', 'Mysore', 'Goa', 'Kerala']
// console.log(places.indexOf("Goa"));       //? 0
// console.log(places.lastIndexOf("Goa"));   //? 5
// console.log(places.indexOf("xyz"));       //? -1


// todo : includes() : It is used to check array element is present or not & It returns boolean value (true/false)
//                     It is case-sensitive.
// let places = ['Goa' , 'Hassan' , 'Bangalore' , 'Goa' , 'Mysore' , 'Goa' , 'Kerala']
// console.log(places);
// console.log(places.includes("Hassan"));  //? true
// console.log(places.includes("goa"));     //? false
// console.log(places.includes("Chennai")); //? false


// todo : slice() : It is used to extract array elements using starting index and stoping index(always excluded) 

// let places = ['Goa' , 'Hassan' , 'Bangalore' , 'Goa' , 'Mysore' , 'Goa' , 'Kerala']
// console.log(places.slice(2,5));   //? ['Bangalore', 'Goa', 'Mysore']


// todo : reverse() :  It is used to reverse the array
// let arr = [1,2,3,4,5]
// console.log(arr.reverse());    //? [5, 4, 3, 2, 1]


// todo : join() : It is used to convert array to string
// let arr = ['I' , 'Love' , 'Java' , 'Script']
// console.log(arr);            //? ['I', 'Love', 'Java', 'Script']
// console.log(arr.join());     //? I,Love,Java,Script
// console.log(arr.join(" "));  //? I Love Java Script

// todo : flat() : It is used to convert multi-dimensional array to single dimensional array
// let arr = [10 , 20 , ['a' , 'b'] , [1 , 2 , 3]]
// console.log(arr);          //?  [10, 20, Array(2), Array(3)]
// console.log(arr.flat());   //? [10, 20, 'a', 'b', 1, 2, 3]

// todo : concat() : It is used to 

// let arr1 = [1,2,3]
// let arr2 = [['a','b'],"XYZ"]
// console.log(arr1.concat(arr2));   //*  other method to concatenate: console.log([arr1 , arr2]);
// //*  [1, 2, 3, Array(2), 'XYZ']
// console.log(arr1.concat(arr2).flat());    //? [1, 2, 3, 'a', 'b', 'XYZ']

// *======|06-09-2026| ==============================================================

//! Important Methods
// todo : for loop , for-in , for-of
// let arr = [10,15,20,25,30]
// console.log(arr);

// console.warn("Using for loop");
// for(let i=0; i<arr.length; i++){
//     console.log(i);
//     console.log(arr[i]);
// }

// console.warn("Using for-in loop");
/* 
NOTE : where ever we can access the index value , then by default we can access its respective array elements 
*/

// for(let index in arr){
//     // console.log(index);    //? index --> 0,1,2,3,4
//     // console.log(arr[index]);   //? elements --> 10,15,20,25,30
// }

// console.warn("Using for-of loop");
// for(let element of arr){
//     console.log(element)   //? elements --> 10,15,20,25,30
// }



// todo : forEach loop
// console.warn("Using for loop");
// for(let i=0; i<arr.length; i++){
//     console.log(i);
//     console.log(arr[i]);
//     console.log(arr);
// }

// console.warn("Using for each Loop");

// arr.forEach((element , index , array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// })


// todo : Example program - difference btwn for loop and forEach loop
// console.warn('Using for loop');
// let arr = [7,6,5,4,3]
// new_Arr = []
// for (let i = 0; i< arr.length; i++){
//     new_Arr[new_Arr.length] = arr[i] + 2
// }
// console.log(new_Arr);


// console.warn("Using forEach loop");
// let arr = [7,6,5,4,3]
// new_Arr = []
// arr.forEach((element) => {
//     new_Arr[new_Arr.length] = element+2 
// })
// console.log(new_Arr);

// console.warn("Using for-in loop");
// let arr = [7,6,5,4,3]
// new_Arr = []
// for(let index in arr){
//     new_Arr[new_Arr.length] = arr[index] + 2
// }
// console.log(new_Arr);


// console.warn("Using for-of loop");
// let arr = [7,6,5,4,3]
// new_Arr = []
// for(let element of arr){
//     new_Arr[new_Arr.length] = element+ 2
// }
// console.log(new_Arr);

// todo : map() --> It is used to do common operation for all array elements and 
//              it returns the modified array

// console.warn("Using map()");
// let arr = [7,6,5,4,3]
// // let res = arr.map((element) => {
// //     return element+2
// // })

// console.log(arr.map(element => element+2));


//! Task  : Converts the original array's each element to uppercase and store in new array and print that array
// todo : Using for loop
// console.warn("Using for loop");
// let fruit = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"]
// let new_Arr = []
// for (let i = 0; i < fruit.length ; i++){
//     new_Arr[new_Arr.length] = fruit[i].toUpperCase()
// }
// console.log(new_Arr);

// todo : Using for-in loop
// console.warn("Using for-in loop");
// let fruit = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"]
// let new_Arr = []
// for (let index in fruit){
//     new_Arr[new_Arr.length] = fruit[index].toUpperCase()
// }
// console.log(new_Arr);

// todo : Using for-of Loop
// console.warn("Using for-of loop");
// let fruit = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"]
// let new_Arr = []
// for (let element of fruit){
//     new_Arr[new_Arr.length] = element.toUpperCase()
// }
// console.log(new_Arr);

// todo : Using forEach loop`
// console.warn("Using forEach loop");
// let fruit = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"]
// let new_Arr = []
// fruit.forEach((element) => {
//     new_Arr[new_Arr.length] = element.toUpperCase()
// })
// console.log(new_Arr);

// todo : Using map()
// console.warn("Using map()");
// let fruit = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"]
// console.log(fruit.map(element => element.toUpperCase()));


// todo : Using filter()
// let arr = [7,6,5,4,3]
// console.log(arr);   //? [7,6,5,4,3]
// console.log(arr.filter(element => element%2 == 1));


// task 2 : Print fruits name whose name ending with 'e'
// let fruit = ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes"]
// let e = fruit.filter((element) => {
//     return element.endsWith('e')
// })
// // console.log(e);
// console.log(fruit.filter(element =>element.endsWith('e')));

// *======= 07-09-26 ================================================================

//!  Using reduce()
/* Syntax : 
            array.reduce((accumulator , currentValue , index , array) => {
                return result
            } , initialValue)   

NOTE :
--> Accumulator = A variable that stores and keeps updating the result while processing elements one by one.
--> currentValue = current array element
--> index = index of current array element
--> array = original array
--> initialValue  = Initial Value of accumulator 

*/

// todo : Sum of all array elements 
// let arr = [4,2,3,5,7]
// console.log(arr);
// let res = arr.reduce((preVal , curVal) => {
//     // let sum = preVal + curVal
//     // console.log(`${preVal} + ${curVal} = ${sum}`);
//     // return sum
//     return preVal + curVal
// })
// console.log(res);


// todo : Multiple of all array elements 
// let arr = [4,2,3,5,7]
// console.log(arr);
// let res = arr.reduce((preVal , curVal) => {
//     return preVal * curVal
// } , 1)
// console.log(res);

// ? Using sort() : It is used to sort the array element in ascending or descending order , And it return the sorter array 

// let arr = [9,1,8,2,3,7,4,6,5]
// console.log(arr);
//? Sorting in ascending order
// console.log(arr.sort());
//? Sorting in descending order
// console.log(arr.sort().reverse());

//! Here , sorting in done based on only the starting digit of the number
// let arr = [932,121,821,82,332,7,314,6,35,911,888,23,27]
// console.log(arr);
//? Sorting in ascending order
// console.log(arr.sort());
//? Sorting in descending order
// console.log(arr.sort().reverse());


//! Proper ascending sorting 
//? Sorting in ascending order
// let arr = [932,121,821,82,332,7,314,6,35,911,888,23,27]
// console.log(arr);
// let x = arr.sort((a , b) => {
//     return a - b
// })
// console.log(x);


//! Proper descending sorting 
//? Sorting in descending order
// let arr = [932,121,821,82,332,7,314,6,35,911,888,23,27]
// console.log(arr);
// let x = arr.sort((a , b) => {
//     return b - a
// })
// console.log(x);


// todo: find() : It is used to print/find/display first matching array element based on the condition.

// let arr = [10,20,30,40,50,60]
// console.log(arr);
// let res = arr.find((element , index) => {
//     return element > 25
// })
// console.log(res);

// ? Using special behaviour of arraow function
// let arr = [10,20,30,40,50,60]
// console.log(arr);
// console.log(arr.find((element , index) => element > 25));

// todo : findIndex() : It is used to find index of 1st matching array element based on the condition.

// let arr = [10,20,30,40,50,60]
// console.log(arr);
// let index = arr.findIndex( (element) => {
//     return element > 25
// })
// console.log(index);

// ? Using special behaviour of arrow function
// let arr = [10,20,30,40,50,60]
// console.log(arr); 
// console.log(arr.findIndex(element => element > 25));