// let arr1 = [2,34,38.5,'h']
// arr1.push("hello","javaScript")
// arr1.unshift("first","second" ,"third")
// console.log(arr1);
// // poop function is used for remove the last elements from the array 
// //shift funtion is used for remove the elements from first position of array

// arr1.pop()
// console.log(arr1);
// let part =arr1.slice(1,4)
// console.log(part);

let ar2=[1,2,3,45,6,7,5,89,10,34,76,87]
let part=ar2.slice(2,11)
for(let i=0;i<10;i++){
    if(part[i]%2==0){
     console.log(part[i]);
    }
}

//splice function is use to remove or add at specific position

let inp=document.getElementById('inp'),
   box = document.getElementById('box');
box.setAttribute("style","width:200px; height:200px; border:2px solid black;")
inp.addEventListener("input",()=>{
  box.style.backgroundColor = input.value
  box.style.borderRadius = input.value
})


