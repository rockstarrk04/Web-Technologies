console.warn("Arrays");
//   Basic of Arrays

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

let arr1 = [1,2,3]
let arr2 = [['a','b'],"XYZ"]
console.log(arr1.concat(arr2));   //*  other method to concatenate: console.log([arr1 , arr2]);
//*  [1, 2, 3, Array(2), 'XYZ']
console.log(arr1.concat(arr2).flat());    //? [1, 2, 3, 'a', 'b', 'XYZ']