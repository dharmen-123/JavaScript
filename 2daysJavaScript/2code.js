//Q.1 Write a program to add two numbers and find the square of result

let a=parseInt(prompt("Enter num 1:  "))
let b=parseInt(prompt("Enter num 2:  "))
var result=a+b
document.write(result,"\n")
var sqr=result*result 
document.write("Square of result:",sqr,"    \n")
//Q.2  Write a program to find the area of a circle using the formula A = πr2 where A
let r = parseInt(prompt("Enter the radius : "))
var cir=3.14*r*r
document.write("Area of circle:",cir)
//Q.3 Write a program to swap to value using third variables value should be taken from the user

var temp=a
    a=b
    b=temp
console.log("value of a:",a,"value of b:", b)