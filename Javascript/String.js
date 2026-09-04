console.error("String in Javascript");

console.warn("Strings");

// todo : String Concatenation
// let str = "JavaScript"
// console.log(str);
// console.log("I Love"+ str);
// console.log("I Love "+ str);

// console.log("I Love", str);
// console.log("I Love ", str);    


// Todo : String Interpolation
// console.log(`I Love ${str}`);

// //! String Methods

// let text = "Javascript"
// console.log(text);   // Javascript
// console.log(typeof(text));   // string
// console.log(text.length);   // 10
// console.log(text[3]);   // a
// console.log(text[-3]);   // undefined



// ? NOTES:
/*
    --> charAt() and at() are used to get a character from a string based on its index position.
    --> In charAt() we can work only with positive index and not with negative index 

*/

// let s1 = "Javascript"
// console.log(s1);  // Javascript

// todo : length
// console.log(s1.length);   // 10

// todo : charAt()
// console.log(s1.charAt(4));   // s
// console.log(s1.charAt(-4));  // empty string

// todo : at()
// console.log(s1.at(5));   // c
// console.log(s1.at(-5));  // c

// todo : charCodeAt()
// console.log(s1.charCodeAt(6));   // 114
// console.log(s1.charCodeAt(-7));  // NaN
// console.log(s1.at(-9).charCodeAt(0));  // 97

// todo : toUpperCase() , toLowerCase()
// console.log(s1.toLowerCase());    // javascript
// console.log(s1.toUpperCase());    // JAVASCRIPT

// todo : startsWith() , endsWith()
/*
    NOTE: 
    --> startsWith() checks whether the string starts with specified text
        syntax : string.startsWith (searchString , indexPosition)
    
    --> endsWith() checks whether the string ends with specified text
        syntax : string.endsWith (searchString , length)
    
    --> Both returns the boolean value (true / false)
*/

// console.log(s1.startsWith("Java"));     // true
// console.log(s1.startsWith('ava'));     // false
// console.log(s1.startsWith("a" , 1));    // true

// console.log(s1.endsWith("t"));          // true
// console.log(s1.endsWith("J"));          // false
// ===================================================================

// todo : indexOf() , lastIndexOf()

/*
    NOTE : 
        --> indexOf() and lastIndexOf() is used to check index position of the character , if
            character is present it returns the index position or else -1
        --> indexOf() returns the 1st occurrence of index , lastIndexOf() returns the last
            occurrence of index
*/

// let text = "Javascript"
// console.log(text);
// console.log(text.indexOf('a'));        // 1
// console.log(text.lastIndexOf('a'));    // 3
// console.log(text.indexOf('z'));        // -1
// console.log(text.lastIndexOf('z'));    // -1

// todo : includes()
/*
    NOTE : 
        --> includes() method is used to chect whether a string character is present or not
            and it returns Boolean value (True / False)
*/
// console.log(text.includes('a'));        // true
// console.log(text.includes('z'));        // false

// todo : subString() , subStr() , slice()
/*
    NOTE : 
        --> All these methods are used to extract characters but they behave differently & it returns the string
        --> string.subString(startIndex , endIndex)
        --> string.subStr(startIndex , length)
        --> string.slice(startIndex , endIndex)  & also it supports -ve index
*/

// let str = "Javascript"
// console.log(str);                   // Javascript
// console.log(str.substring(0,4));    // Java
// console.log(str.substring(4,7));    // scr

// console.log(str.substr(0,4));       // Java
// console.log(str.substr(2,6));       // vascri

// console.log(str.slice(0,4));        // Java
// console.log(str.slice(0,-6));       // Java
// console.log(str.slice(2,-2));       // vascri
// console.log(str.slice(-2,-2));      // empty string
// console.log(str.slice(-8,8));       // vascri
// console.log(str.substring(4));      // script
// console.log(str.slice(-4,9));       // rip


// todo : repeat()
// ? It is used to repeat the string for number of times

// let text = "Hello "
// console.log(text.repeat(10));


// todo : trim() , trimStart() , trimEnd()
    // It is used to remove extra Space from starting & ending of the string

// let str = "       Javascript         "
// console.log(str);               //        Javascript         
// console.log(str.trim());        //  Javascript
// console.log(str.trimStart());   // Javascript         
// console.log(str.trimEnd());     //        Javascript

//  todo : split()
/* 
    NOTE : 
        --> It is used to convert string to array.
*/

// let str = "I Love Java Script"
// console.log(str);            // I Love Java Script 
// console.log(str.split());    //? It converts the string to array.  // ['I Love Java Script']   
// console.log(str.split(""));  //? Split the characters // ['I', ' ', 'L', 'o', 'v', 'e', ' ', 'J', 'a', 'v', 'a', ' ', 'S', 'c', 'r', 'i', 'p', 't']
// console.log(str.split(" ")); //? Split the words   // ['I', 'Love', 'Java', 'Script']

//  todo: join()
/* 
    NOTE : 
        --> It is used to convert array to string.
*/

// let arr = ["Hai" , "I" , "am" , "in" , "class"]
// console.log(arr);           //? ['Hai', 'I', 'am', 'in', 'class']
// console.log(arr.join());    //? Hai,I,am,in,class
// console.log(arr.join(" ")); //? Hai I am in class
// console.log(arr.join("*")); //? Hai*I*am*in*class

// todo : concat()
/* 
    NOTE : 
        --> It is used to concatenate strings.
*/

// let str1 = "Hello"
// let str2 = str1.concat(" Dinga")
// console.log(str2.concat(" How are you ? "));   //? Hello Dinga How are you ? 

// todo : replace() , replaceAll()
// let str = "Java and Java script"
// console.log(str.replace("Java" , "Mava"));  //? Mava and Java script   (replace only the 1st occurrence)
// console.log(str.replaceAll("Java" , "Mava")); //? Mava and Mava script  (replace for all occurrences)

// todo : padStart() , padEnd()

// let str = "5"
// console.log(str);
// console.log(str.padStart(4,"0101"));  //? 0105
// console.log(str.padEnd(4,"0110"));    //? 5011

// todo : fromCharCode()
// console.log(String.fromCharCode(65,66,67,68));  //? ABCD

// todo : Example Prgram : Print alphabet from A-Z

// for(let i = 65 ; i <= 90; i++){
//     console.log(String.fromCharCode(i) + " ");
// }



// for(let i = 65 ; i <= 90; i++){
//     if (String.fromCharCode(i) == "A" || String.fromCharCode(i) == "E" || 
//         String.fromCharCode(i) == "I" || String.fromCharCode(i) == "O" ||
//         String.fromCharCode(i) == "U"){
//             console.log(String.fromCharCode(i) + " ");
//     }   
// }

// arr = ["A" , "E" , "I", "O" ,"U"]
// for (let i = 65 ; i <= 90; i++){
//     if ((arr.includes(String.fromCharCode(i)))){
//         console.log(String.fromCharCode(i));
//     }
// }

// arr = ["A" , "E" , "I", "O" ,"U"]
// for (let i = 65 ; i <= 90; i++){
//     if (!(arr.includes(String.fromCharCode(i)))){
//         console.log(String.fromCharCode(i));
//     }
// }


// todo : Count vowels in strings

// let text = "Dinga"
// let count = 0
// let vowel = ""

// for (let i = 0 ; i < text.length ; i++){
//     if ("AEIOUaeiou".includes(text[i])){
//         count++
//         vowel += text[i]
//     }
// }
// console.log(`Given string :${text}`);
// console.log(`Vowel count : ${count}`);
// console.log(`Vowels in ${text} : ${vowel}`);

// Todo : Count Space

// let str = "I love Javascript"
// let count = 0
// for (let i = 0 ; i < str.length ; i++){
//     if (" ".includes(str[i])){
//         count++;
//     }
// }
// console.log(`Space Count in "${str}" :  ${count}`);


// todo : remove space
// let str1 = "I love Javascript"
// console.log(str1.replaceAll(" ",""));

