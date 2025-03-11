let mdiv = document.querySelector('#maindiv')
// mdiv.style.width="400px"
// mdiv.style.height="400px"
mdiv.setAttribute('style','width:200px; height:200px; border-radius:30px;text-align:center; border: 2px solid black; align-items:center; ')

let h=0
let onplus=document.querySelector('#onplus')
onplus.addEventListener('click',()=>{
    head.innerHTML = h++ 
         
})
onplus.setAttribute('style','font-size:35px; border-radius:10px;padding:10px; ')

let onminus=document.querySelector('#onminus')
onminus.setAttribute('style','font-size:35px; border-radius:10px;padding:10px; ')

function plus(){
    let head=document.getElementById('head')
    head.innerHTML = h++ 
}
function minus(){
    if(h>0){
    head.innerHTML = --h
}
}