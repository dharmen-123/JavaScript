let ar1=["cybrom" , 28 , 'M', "Milan" ,46]
// ar1.splice(2,1)

// // add value syntax using splice function
// // arr.splice(index ,  ,value)
// ar1.splice(2,0,"hello")
// console.log(ar1);


//Destructuring of array
// let [name,age , shop , cnt]=["javaScript",29,"milan",947]
// console.log(name);

let ar2=["hello",28 ,'A',297]
// let ar4=['H',297]
// let ar3=[ar1,ar2]  //Array of Array
let ar3=[...ar1,...ar2]
console.log(ar3);


//Spread operator / rest Operator  denoted by ...
// rest operator used in function 
