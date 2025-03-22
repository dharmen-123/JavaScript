let obj ={
    name:"Dharmendra",
    contact:10879,
    fun:function(){
        // alert("OBJECT FUNCTION IS WORKING")
    },
    car:["BMW","MERCEDEZS","AUDI","ROLLS ROYCE"]
}

         // function in objects

obj.fun()
    // ARRAY IN OBJECTS
console.log(obj.car[3]);

//  ADD THE OBJECTS
const obj1={
    name:"Python",
    devleop:"GOUDO VAN RAUSSAM",
    year:"1991",
    type:"language"
}
const obj2={
    company:"GOOGLE",
    country:"USA",
    CEO:"Sunder pichai"
}
let obj3={...obj1,...obj2}
console.log(obj3);

    // ADD NEW KEY VALUE IN OBBJECT
obj2.salary=287000000
console.log(obj2);
    //DELETE KEY VALUE IN OBJECT
delete obj1.type
   //UPDATE VALUE OF ANY KEY IN OBJECT
  obj1.year=1992
  console.log(obj1);

for(let V in obj1){
    console.log(V);
}
