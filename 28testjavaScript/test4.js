    //    TASK 1 START FROM HERE
   
let hrs =document.querySelector('#hrs')
let min =document.querySelector('#min')
let sec =document.querySelector('#sec')

let stp;

function start(){
    let [h,m,s]=[0,0,0]
    stp=setInterval(()=>{
        sec.innerHTML=s++;
        if(s==60){
            s=0;
            min.innerHTML=m++;
            if(m==60){
                m=0;
                hrs.innerHTML=h++;
            }
        }
    },10)
}
function stop(){
        clearInterval(stp);
}
function reset(){
    hrs.innerHTML="00"
    min.innerHTML="00"
    sec.innerHTML="00"
}


    //    TASK 2 START FROM HERE

let count=document.querySelector('#count')
let c=0;

function plus(){
   count.innerHTML = ++c;
}
function minus(){
     if(c>0){
        count.innerHTML= --c;
     }
}

//  TASK 3 START FROM HERE

let body = document.querySelector('body')
body.style.backgroundColor="white"
function theme(){
    if(body.style.backgroundColor=="white"){
            body.style.backgroundColor="black"
            body.style.color="white"
    }
    else{
       body.style.backgroundColor="white"
       body.style.color="black"
    }
}

// TASK 4 START FROM HERE

let ar1=[1,2,3,4,5]
let ar2=[6,7,8,9,10]
let arm=[...ar1,...ar2]
// console.log(arm);
for(let i=0;i<10;i++){
    if(arm[i]%2==0){
        console.log(arm[i]);
    }
}