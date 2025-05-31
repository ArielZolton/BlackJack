import greeting from "./greeting.js"; 
import { config } from "./config.js"; 
import { colors } from "./colors.js"; 
import { add as sum, subtract as minus } from "./mathUtils.js"; 


console.log(greeting("Akon")); 
console.log(config); 
console.log(colors); 
console.log(sum(5, 3)); 
console.log(minus(10, 7)); 