// Import using ES Module in NodeJs..

import {add,subtract,multi,division,PI } from "./math.js";
import * as math from "./math.js";
console.log("Addition=",add(5,10));
console.log("Subtraction=",math.subtract(50,10));
console.log("Multiplication=",multi(500,10));
console.log("Division=",division(50,10));
console.log("Value of PI= ",PI)

