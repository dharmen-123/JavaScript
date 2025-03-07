// setInterval(()=>{document.write("hello")},2000)

// let n=1
// setInterval(()=>document.write(n++),2000)

let h=0
let st;
function num(){
  let head=document.getElementById('head')
  setInterval(()=>head.innerHTML=h++ , 1000)
}

function stp(){
    clearInterval(st)
}
