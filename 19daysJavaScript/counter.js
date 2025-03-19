let mdiv = document.querySelector('#maindiv')
mdiv.setAttribute('style','width:250px; height:250px; border-radius:30px;text-align:center; border: 2px solid black; align-items:center; background-color:cyan ;')

const body= document.querySelector('body')
body.setAttribute("style","background-color:grey; display:flex; justify-content:center; align-items:center; height:100vh;")
const text=document.querySelector('.text')
text.setAttribute("style","text-align:center; font-size:50px;color:red;")

let h=0

let head=document.getElementById('head')
head.setAttribute("style","font-size: 90px; margin-top:0%;")

let onplus=document.querySelector('#onplus')
onplus.setAttribute('style','font-size:30px; border-radius:10px;padding:10px; ')
onplus.addEventListener('click',()=>{
    head.innerHTML = h++        
})

let onminus=document.querySelector('#onminus')
onminus.setAttribute('style','font-size:30px; border-radius:10px;padding:10px; ')
onminus.addEventListener('click',()=>{
    if(h>0){
        head.innerHTML = --h
    }
})
