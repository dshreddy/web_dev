// Comment

//Printing
console.log('Hello World');

console.log();
console.log();

//Variables
let firstName = 'xy', lastName = 'z';
console.log(firstName,lastName);
// variable names can't be a reserved keyword
// can't start with a number
// can't contain a space or hypen (-)
// are case sensitive

console.log();
console.log();

//Constants (Values that can't be changed)
const INTEREST_RATE = 0.6;
console.log(INTEREST_RATE);

console.log();
console.log();

// Primitive Datatypes
let name = 'xyz'; //string literal
let age = 21; //number literal
let isApproved = false; // boolean literal
let someVar = undefined; 
let selectColor = null; 

// Strings
name = "sai hemanth reddy";
console.log(name.slice(0,2)); // prints 2 characters starting from index 0
console.log(name.toUpperCase());
console.log( "hello " + name.slice(0,1).toUpperCase() + name.slice(1,name.length) );

console.log();
console.log();


// Arthematic operations
console.log(2+3);
console.log(3/6);
console.log(6/3);
console.log(6*3);
console.log(2%3);
let x = 100, y = 200;
x++;
y += x
console.log(x,y);

console.log();
console.log();

// Reference Datatypes
// { Objects, Array, Function }

// Functions
function greet(name) {
    console.log('Hello '+name);
    return "return value";
}
console.log(greet('Sai'));

console.log();
console.log();

//Random Number generator
let n = Math.random();
n = Math.floor(6*n) + 1;
console.log(n);

console.log();
console.log();

//Conditionals
// to check equality (===) [checks dataypes too]
if(n %2 === 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}

console.log();
console.log();

// Arrays & Loops
let arr = [ 'red', 'blue', 1];
console.log(arr)
for(let i = 0; i<arr.length; i++) {
    console.log(arr[i], typeof(arr[i]),end="");
}
console.log(arr.includes(1));
arr.push('new entry 0');
console.log(arr)
arr.pop()


// Objects
let person = {
    name : 'xyz',
    age : 21
};
console.log(person.name, person['name']);