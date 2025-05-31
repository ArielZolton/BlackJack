console.log("Hello World"); // print("hello world")

let nickname = "John"
let age = 21

console.log(nickname, age);

age = 22;

var firstName = "Johnathon"

const lastName = "Smith"

console.log(firstName, lastName, nickname, age);

// can not redeclare the same variable name
// let age = 23;

age = 24

console.log(age);

// var firstName = "John"; // the OG, use let instead (modern JS)
// const lastName = "Doe"; // constant, cannot be reassigned








// the Nones
console.log(undefined);
console.log(null); // None
console.log(NaN); // Not a Number





console.log("------- Conditionals Part 1 -------");

let attendance = 86

if (attendance > 80) {
    console.log("You are a genius");
} else if (attendance > 60) {
    console.log("Attendance requirements not met, but close");
} else {
    console.log("Attendance requirements not met, you have to get that working!!!!");
}




console.log("--------------More Conditionals------------------");
let grade = 85

if (grade >= 90) {
    console.log("A")
} else if (grade >= 80) {
    console.log("B")
} else if (grade >= 70) {
    console.log("C")
} else if (grade >= 60) {
    console.log("D")
} else {
    console.log("F")
}





console.log("------- Scopes let -------");
let outside = "outside"
console.log(outside)

{
    // console.log(outside);  // works if we do not declare the "outside" in this scope 
    let outside = "outside: in here"
    console.log(outside)

    let inside = "inside"
    console.log(inside)
}

console.log(outside)
// console.log(inside)






console.log("-------------Scopes var-------------------");
// var is old way of declaring variables
// has a ton of issues, specially with scope
var outside2 = "outside"
console.log(outside2)

{
    console.log(outside2)
    var outside2 = "outside: in here"
    console.log(outside2)

    var inside2 = "inside"
    console.log(inside2)
}

console.log(outside2)
console.log(inside2)
// use LET!!!!!!




console.log("--------------Conditional Part 2------------------");
// >, <, >=, <=, ==, ===, !=, !==

// type coercion, which type casting, switching types to the other variable
console.log(10 == "10") // true

// strict equality, aka triple =, doesn't do type coercion
console.log(10 === "10") // false

// !=, !==

console.log(10 != "10") // false
console.log(10 !== "10") // true






console.log("--------------arrays------------------");

let myArray = ["Hello", "World", "!"]

console.log(myArray)








console.log("--------------for loop------------------");

// java style or c style
// i++ is the same as i = i + 1
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for of loop
let myArray2 = ["Hello", "World", "!"]
for (let item of myArray2) {
    console.log(item);
}
// for item in myArray2:
//     print(item)

for (char of "fruits") {
    console.log(char);
}

// better in my opinion, be more specific
for (let char of "fruits") {
    console.log(char);
}

let arr = ["apple", "banana", "cherry"];
console.log(arr[0]);
console.log("---");

// opinion: this is better because it is more specific
for (const fruit of arr) {
    console.log(fruit);
}

console.log("---");
for (f of arr) {
    console.log(f);
}










console.log("--------------Functions------------------");

function square(num) {
    return num * num;
}

console.log(square(5));

function divMod(x, y) {
    return [Math.floor(x/y), x%y];
    // return value1, value2 <- this is in python and it will return a single tuple instead
}
console.log(divMod(10, 3));

const cookies = 17;
const people = 5;

const values = divMod(cookies, people);
console.log(values);

const [cookiesPerPerson, remainder] = divMod(cookies, people);
console.log(cookiesPerPerson, remainder);


//es6
const quotRem = function(x, y) {
    return [Math.floor(x/y), x%y];
}
console.log(quotRem(10, 3));







console.log("--------------Arrow Functions------------------");
const squareArrow = (num) => num * num;

console.log(squareArrow(5));

const squareArrow2 = (num) => {
    return num * num;
}
console.log(squareArrow2(5));

const celebrate = () => console.log("Happy Birthday!");

celebrate();





console.log("--------------Objects------------------");
const fruits = ["apple", "banana", "cherry"];

console.log(fruits);

fruits.forEach(fruit => console.log(fruit));
fruits.map(fruit => console.log(fruit)); // returns a new array, wrong use but still works

// map returns a new array
// not the best used of maps below
const newFruits = fruits.map(fruit => console.log(fruit));

console.log(newFruits);

const newFruits2 = fruits.map(fruit => fruit.toUpperCase());

console.log(newFruits2);
console.log(fruits);







console.log("--------------Objects------------------");
const dirtyChai = {
    expresso: 2,
    isChai: true,
    milk: "whole",
    isIced: false,
}
// properties in the object that dirtyChai is assigned (or pointing to) is mutable
dirtyChai.sprinkles = 'cinnamon'; // dot notation
// dirtyChai["isIced"] = true; // bracket notation

// const prop = "isIced";
// dirtyChai[prop] = true;

dirtyChai.expresso = 3;

console.log(dirtyChai);

// const prop = "isIced";
// dirtyChai[prop] = true;

// the following is a reassignment of dirtyChai
// this is not allowed in javascript, cannot reassign dirtyChai to a new object
// dirtyChai = {
//     expresso: 4,
//     isChai: true,
//     milk: "whole",
//     isIced: false,
// }

console.log(dirtyChai);






console.log("--------------Classes using functions constructor------------------");
function FancyDrink(espresso, milk="whole", sprinkles=null, isIced=false, isChai=false) {
    this.espresso = espresso;
    this.milk = milk;
    this.isIced = isIced;
    this.sprinkles = sprinkles;
    this.isChai = isChai;
    this.drink = () => console.log("that was delicious");
    this.toString = () => {
        // backtick is like f-string in python
        return `This is a ${this.isChai ? "chai" : "coffee"} with ${this.espresso} espresso and ${this.milk} milk`;
    }
    // def __str__(self):
}

// class is another option


const myDrink = new FancyDrink(4, "whole", "cinnamon");
const latteDrink = new FancyDrink(2, "whole");
const icedChai = new FancyDrink(2, "almond milk", null, true, true);

console.log(myDrink);
console.log(latteDrink);
console.log(icedChai);

console.log(String(myDrink));
console.log(String(latteDrink));
console.log(String(icedChai));
// console.log(icedChai.toString());

myDrink.drink();
latteDrink.drink();
icedChai.drink();

const myDrink2 = new FancyDrink();

console.log(myDrink2); // everything is undefined
