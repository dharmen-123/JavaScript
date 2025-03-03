let inp = document.getElementById('inp')
inp.style.border="2px solid black"
inp.style.padding="5px"
inp.style.borderRadius="10px"


// let ad= document.getElementById()
let count=0
function add(){
//   let count = 0
    if(count<4){
   let inp=document.createElement('input')
   inp.type="text" 
   inp.placeholder="Enter here"
   inp.style.padding="5px"
   inp.borderRadius="10px"
  let  ip =document.body  
  ip.append(inp)
  count++
}
else{
   alert("Sorry Only 4 input is Available")
}

}