// var a=null;
// console.log(a);

// let a=10;
// debugger
// a=a+5;
// a=a-2;
// debugger
// console.log(a);

// var a=20;
// var b=20;
// console.log(a===b);


// document.getElementsByTagName('button'),addEventListener('click',{

// })

// JavaScript data Types 
//  1 Primitive Data Types 
//  String
//  Number
//  BigInt
//  Boolean
//  undefined
//  null
//  Symbol
  
//   NON primitive data Types
//    Object 
//    Array 

// let a="Dharmendra";
// let b=10;
// let c=20283829293829n;
// let d=true;
// let e;
// let f=null;
// let g=Symbol(10);
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));
// console.log(typeof(g));

// console.log("5"==5);
// console.log("5"===5);

// == this sign compare the values 
// === this is the strictle equality sign  also compare the type of values
 
//    ############# HOISTING In JavaScript #############
//  Hoisting means the declaration of variable to top of the scope 
   
//    console.log(x);
//    var x=10;
   
// ###### CLOUSERS in JavaScript 

// A clouser is the function that retains access to its scope even after  the outer function has finished executing 

// function outer(){
//     let c=0;
     
//     function inner(){
//         c++;
//         console.log(c);
//     }
//     return inner;
// }

// const count=outer();
// count();
// count();
// count();
// count();


// #### Differencen between let , var , const 

// var is the global scope and it follow hoisting also reassignable
// let is block of scope and it not follow hosting and it reassignable
// const is block of scope and it does not follow hoisting and it is not reassignable


// if(true){
// console.log(c);   // hoisting
// var a=20;
// a=50;
// let b=10;
// b=40;
// const c=30;
//     console.log(b);

// }
//     console.log(a);

