let btn = document.querySelector('#btn')
let onc = document.querySelector('#onc')
let dbl = document.querySelector('#dbl')
let onme = document.querySelector('#onme')
let onml = document.querySelector('#onml')

btn.addEventListener('click',()=>{alert("hello")})
onc.addEventListener('dblclick',()=>{alert("hello")})
dbl.addEventListener('dblclick',()=>{alert("hello")})
onme.addEventListener('mouseenter',()=>{alert("onmouseenter")})
onml.addEventListener('mouseleave',()=>{alert("hello")})