import 'dotenv/config';

// Method 1: Direct assignment
const testDirectAssignment = () => {
    const start = performance.now();
    for (let i = 0; i < 1000000; i++) {
        const MONGO_URI = process.env.MONGO_URI;
    }
    const end = performance.now();
    return end - start;
};

// Method 2: Destructuring
const testDestructuring = () => {
    const start = performance.now();
    for (let i = 0; i < 1000000; i++) {
        const { MONGO_URI } = process.env;
    }
    const end = performance.now();
    return end - start;
};

// Run tests multiple times for more accurate results
const iterations = 5;
let directTotal = 0;
let destructuringTotal = 0;

console.log('Running performance tests...\n');

for (let i = 0; i < iterations; i++) {
    const directTime = testDirectAssignment();
    const destructuringTime = testDestructuring();
    
    directTotal += directTime;
    destructuringTotal += destructuringTime;
    
    console.log(`Iteration ${i + 1}:`);
    console.log(`Direct assignment: ${directTime.toFixed(2)}ms`);
    console.log(`Destructuring: ${destructuringTime.toFixed(2)}ms\n`);
}

const directAvg = directTotal / iterations;
const destructuringAvg = destructuringTotal / iterations;

console.log('Average Results:');
console.log(`Direct assignment: ${directAvg.toFixed(2)}ms`);
console.log(`Destructuring: ${destructuringAvg.toFixed(2)}ms`);
console.log(`Difference: ${Math.abs(directAvg - destructuringAvg).toFixed(2)}ms`);
console.log(`Faster method: ${directAvg < destructuringAvg ? 'Direct assignment' : 'Destructuring'}`); 