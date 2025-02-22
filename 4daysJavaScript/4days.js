// let n=parseInt(prompt("Enter the number"))
// for(let i=1; i<=10 ;i++){
//     // console.log(i)
//     console.log(n*i)
// }

       // Q.1  print the name n times
// let a=1
// do{
//     document.write("Qasim <br>")
//    a++
// }
// while(a<11)

   // print the number from 1 to 10
// let a=1
// do{
//     console.log(a)
//     a++
// }
// while(a<=10)

  
let n=parseInt(prompt("enter the number for table"))
let start=1
while(start<11){
    document.write( n+" * "+ start + "=" + start*n ,"<br>")
    start++
}