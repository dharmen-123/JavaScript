let h=0
function plus(){
    let head=document.getElementById('head')
    head.innerHTML = h++ 
}
function minus(){

    if(h>0){
    head.innerHTML = --h
}
}