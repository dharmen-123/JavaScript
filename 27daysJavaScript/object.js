// let stu={
//     stu_name:"Dhamendra",
//     stu_age:20,
//     stu_contact:1234,
//     stu_branch:"AIML",
//     stu_account:{
//         balance:200000,
//         acc_num:8765799
//     }
// }
// console.log(stu.stu_name,stu.stu_branch);
// console.log(stu.stu_account.balance);


function data(){
let name=document.querySelector('#name').value
let age= document.querySelector('#age').value
let contact= document.querySelector('#contact').value
let person ={
    name: name ,
    age: age,
    contact: contact  
}
console.log(person);
return false
}






