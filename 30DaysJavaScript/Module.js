// JS Module's
// Module is the library which is used is when it is require 
// TYPES of MODULE 
//  Import and Export 
// It has also two types
//  1.Default it is use as default keyword
//  2.Named it is used as {function name}
// Default is used when only one fuction is used
// when any file have many function then used named import and export


// import add from './func.js'

// By using Named import export

// import {add, sub} from './func.js'
// By change the name os function 

import {add as Sum , sub as Minus} from './func.js'

let ans= Sum(10,5)
console.log(ans);

let ans2 = Minus(5,8)
console.log(ans2);

