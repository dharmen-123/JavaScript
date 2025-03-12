let head =document.getElementById('head')
head.innerHTML="Hello ,JavaScript!."

//    task 2

let box = document.querySelector('.box')
box.style.width="200px"
box.style.height="200px"
box.style.border="2px solid black"
box.style.textAlign="center"
box.style.alignAlign="center"
// box.setAttribute('style','width:500px; height:500px; border-radius:10px; border:2px solid black;')
function change(){
    box.style.backgroundColor="red"
}

function add(){
    let n =document.createElement('li')
    n.innerHTML = "NEW LIST"
    let mylist=document.getElementById('mylist')
    mylist.append(n)
}
                 //   task 4

let hidebtn = document.getElementById('hidebtn')
function hide(){
    hidebtn.innerHTML=""
}
  
       // task 5
function lap(){
    let t1=document.getElementById('change')
    t1.src="laptop.jpeg"
}
function mob(){
let t1=document.getElementById('change')
    t1.src="mobile.jpeg"
}
function tab(){
let t1=document.getElementById('change')
    t1.src="tablet.jpeg"
}
function cam(){
let t1=document.getElementById('change')
    t1.src="camera.jpeg"
}
function tv(){
let t1=document.getElementById('change')

    t1.src="tv.jpeg"
}
