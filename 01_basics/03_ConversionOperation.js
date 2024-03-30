// conversion operation in JS 
// In JavaScript, a conversion operation refers to the process of converting data from one type to another. JavaScript is a dynamically-typed language, which means that variables can hold values of any type, and the type of a variable can change over time.

// let score = 33
let score = "33avc"
// let score = null
// let score = undefined
// let score = true

console.log(typeof score);
console.log(typeof (score));

let ValueInNumber = Number(score)
console.log(typeof ValueInNumber);
console.log(ValueInNumber);

//"33" => 33
//"33abc" = NaN
//true = 1; false = 0

let isLoggedIn = 0
// let isLoggedIn = ""  false
// let isLoggedIn = "john" true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);
//"" empty string =>false
// "john" +> true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);