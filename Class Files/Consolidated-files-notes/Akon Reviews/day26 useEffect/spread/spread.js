// Spread Operator Review
// ==========================

// 1️⃣ Copying Arrays (Avoiding Mutation)
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Creates a separate copy
copiedArray.push(4);

// console.log(originalArray); // [1, 2, 3] (unchanged)
// console.log(copiedArray); // [1, 2, 3, 4]

// -------------------------

// 2️⃣ Merging Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];

// console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// -------------------------

// 3️⃣ Merging Objects
const user = { name: "Robert", age: 25 };
const updatedUser = { ...user, location: "Chicago" };

// console.log(updatedUser); // { name: "Robert", age: 25, location: "Chicago" }

// -------------------------

// 4️⃣ Passing Arrays as Function Arguments
const numbers = [10, 20, 30];
const maxNum = Math.max(...numbers);

// console.log(maxNum); // 30

// -------------------------

// 5️⃣ Avoiding Mutation in React State Updates (Example)
const items = ["Apple", "Banana"];
const newItems = [...items, "Cherry"]; // Safe update without mutating the old state

// console.log(newItems); // ["Apple", "Banana", "Cherry"]

// -------------------------

// 🚨 What Happens Without Spread (Mutation Issue)
const originalObject = { 
    name: "Robert", 
    details: { age: 25, city: "Chicago" } 
};
const shallowCopy = { ...originalObject };

// Modifying nested data inside shallowCopy (which also affects originalObject)
// console.log(shallowCopy)
// shallowCopy.details.age = 30;

// console.log(originalObject.details.age); // 30 (unexpected mutation!)

const shallowCopyFixed = {
    ...originalObject,
    details: { ...originalObject.details, age: 30 } // ✅ Copies details separately
};

// console.log(originalObject.details.age); // 25 (original remains unchanged)
// console.log(shallowCopyFixed.details.age); // 30 (only shallowCopyFixed is modified)



const users = [
    { name: "Robert", age: 25 },
    { name: "Chris", age: 30 }
];

const updatedUsers = users.map(user => {
    user.age += 1; // ❌ Direct mutation
    return user;
});

// console.log(users); // Unexpected mutation! Original array is modified.



const users2 = [
    { name: "Robert", age: 25 },
    { name: "Chris", age: 30 }
];

const updatedUsers2 = users.map(user => ({
    ...user, // ✅ Creates a new object (safe update)
    age: user.age + 1
}));

// console.log(users2); // Original array remains unchanged
// console.log(updatedUsers2); // New array with updated ages




//Rest Operator(Not Spread) but similar syntax
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// console.log(sum(3, 5, 7,11,12));


const [first, second, ...rest] = [10, 20, 30, 40, 50];

// console.log(first); // 10
// console.log(second); // 20
// console.log(rest); // [30, 40, 50]


const person = { name: "Roger", age: 25, job: "Developer", location: "San Diego" };

const { name, ...details } = person;

// console.log(name); // "Roger"
// console.log(details); 