// JS Module's
// Module is the library which is used is when it is require 
// TYPES of MODULE 
//  Import and Export 
// It has also two types 1.Default 2.Named
// Default is used when only one fuction is used
// when any file have many function then used named import and export


// import add from './func.js'
import {add, sub} from './func.js'
let ans= add(10,5)
console.log(ans);

let ans2 = sub(5,8)
console.log(ans2);

