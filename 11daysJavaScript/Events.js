   //EVENTS
// It is a Action which is perform by the user on our web page
// 1. Mouse Event
//On click is work for left click
//Event Firing
// Events
//on click  , ondblclick  ,onmouseenter

function fun()
{
    document.write("Mouse Events")
}
function img(){
    let img=document.createElement('img')
img.src='car bunglow copy.jpg'
img.style.width='400px'
img.style.borderRadius="15px"
img.style.padding="2px"
img.style.margin="4%"
img.style.boxShadow="5px 5px 15px 8px black"
let a=document.body
a.append(img)
}

function text(){
    let a=document.getElementById('head')
    a.textContent="Zero"
}