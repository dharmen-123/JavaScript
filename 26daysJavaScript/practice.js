let inp=document.getElementById('inp'),
   box = document.getElementById('box');
inp.setAttribute("style","width:400px; height:50px; font-size:30px; font-weight :bold;")
box.setAttribute("style","width:200px; height:200px; border:2px solid black;")
inp.addEventListener("input",()=>{
  box.style.backgroundColor = inp.value
  box.style.borderRadius = inp.value
  box.style.textAlign = inp.value
})

