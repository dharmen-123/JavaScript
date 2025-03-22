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

  // FIND THE KEY OF VALUE IN OBJECTS
for(let V in obj1){
    console.log(obj1[V]);
}
                              //OBJECT DOES NOT SUPPORT FOR OF LOOP

// for print the values of key using for in loop
// SYNTAX console.log(obj1[V]);

  //FOR FIND THE ANY SPECIFIC FROM THE OBJECTS USE this syntax
  // Object.keys(object-name[index])
  // In this Object is the keyword or .keys is the function for accessinh the keys of the object
// Object.keys() function return the values in array format we can acces the key throught pass the indexing

let k= Object.keys(obj1)
console.log(k[1]);

    //Object.values()  is also the function which is used to accesing the values  of the objects

