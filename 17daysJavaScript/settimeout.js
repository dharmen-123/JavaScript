
// setTimeout(()=>{alert("hello")},3000)

// let head =document.getElementById('head')
// setTimeout(()=>{head.style.display="block"},5000)

function fun(){

    let num1=parseInt(document.querySelector('#num1').value)
    let num2 =parseInt(document.querySelector('#num2').value)
    let a= (num1+num2)
    let head=document.getElementById('head') 
    head.innerText= a
    return false
}
setTimeout(()=>{fun()},2000)
