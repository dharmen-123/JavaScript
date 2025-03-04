// setInterval(()=>{document.write("hello")},2000)

// let n=1
// setInterval(()=>document.write(n++),2000)

let h=0
function num(){
  let head=document.getElementById('head')
  head.innerHTML=h++
}
setInterval(()=>num() , 2000)
