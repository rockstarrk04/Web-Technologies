//!  Array and Objects Programs

// todo : Example Program : Revision of Array methods

let arr = [4,3,6,7,8,5,1,9,2]
// console.log(arr);

// squaring each elements using map()
let res = arr.map((elem) => {
    return elem * elem
})
// console.log(res);

// filterring even numbers using filter()

let evenArr = res.filter((elem) => {
    return elem%2 == 0
})
// console.log(evenArr);


// Sorting the array in ascending using sort()
let x = evenArr.sort((a,b) => {
    return a-b
})
// console.log(x);

// Finding sum of all elements

let sum = x.reduce((preVal , curVal) => {
    return preVal + curVal
})
// console.log(sum);



let student = [
    {
        id: 101,
        name:"Dinga Raja",
        age : 23,
        place: "Goa",
        course : "JFS",
        marks : 51
    } ,
    {
        id:102,
        name:"Ramkumar",
        age : 22,
        place:"Madurai",
        course:"PFS",
        marks : 35

    } ,
    {
        id:103,
        name:"Nithin",
        age : 21,
        place:"Chennai",
        course :"AIML" ,
        marks : 62
    },
    {
        id:104,
        name : "Sunil",
        age : 22,
        place : "Bangalore",
        course : "PFS",
        marks : 59
    },
    {
        id:105,
        name : "Vishwa",
        age : 22,
        place : "Bangalore",
        course : "JFS",
        marks : 54
    }
]

console.log(student)

//? Print all students name in Array objects

let allStudentsname = student.map((elem) => {
    return elem.name
})
// console.log(allStudentsname);

//? Print students object whose course is releated to "JFS"

let JFS_student = student.filter((elem) => {
    return elem.course === "JFS"
})
// console.log(JFS_student);

//? Print JFS student name using filter and map
let JFS_student_name = JFS_student.map((elem) => {
    return elem.name
})
// console.log(JFS_student_name);

// let res1 = student.filter((elem) => elem.course == "JFS").map((elem) => elem.name)
// console.log(res1);


// let res2 = student.filter(elem => elem.age > 20 && elem.course === "JFS").map (elem => `${elem.name} is from ${elem.place}`)
// console.log(res2);


//? find object whose id is 104
let id104 = student.find(elem => elem.id === 104)
// console.log(id104);

let passed_student = student.filter(elem => elem.marks > 60).map(elem => elem.name)
// console.log(passed_student);


//? print total marks of all students

let total_mark = student.reduce((sum, elem) => {
    return sum + elem.marks
},0)
// console.log(total_mark);

//?  sort all students details based on the marks
let sorted = student.sort((a , b) => {
    return b.marks - a.marks
})
// console.log(sorted);


//? Print student details who having highest mark

let sorted1 = student.sort((a , b) => b.marks - a.marks)[0]
// console.log(sorted1);

//? Print students details whose in Bangalore and sort based on their marks     
let res2 = student
.filter((elem) => elem.place ==="Bangalore")
.sort((a , b) => b.marks - a.marks)
.reduce((sum,elem) => sum + elem.marks,0)
console.log(res2);