console.log("hello world")      //print

let nickname = "Ariel";
let age = 20;

console.log(nickname, age);

age = 21

console.log(nickname, age);



console.log(undefined);
console.log(null);
console.log(NaN);

console.log("-----------Conditionals-----------");

let attendance = 70;

if (attendance > 80) {
    console.log("You are a genius");
} else if (attendance >60) {
    console.log("You need to get that higher!");
} else {
    console.log("do better...");
}

console.log("-------Scopes---------");

let outside = "outside";
console.log(outside);

{
    // console.log(outside);    //works if we don't declare the outside in this scope
    let outside = "outside: in here";
    console.log(outside);

    let inside = "inside";
    console.log(outside);
}

console.log(outside);
// console.log(inside);

console.log("----------- Scopes var -----------");
var outside2 = "outside";
console.log(outside2)

