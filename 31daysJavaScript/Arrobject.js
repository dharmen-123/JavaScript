// array of object 


let arr=[
    
    {
        name: "Harsh",
        attendence: "85%",
        productivity: "good",
        age: 20
    },
        
    { 
        name: "nikhil",
        attendence: "85%",
        productivity: "excellent",
         age: 22
    },
    
    { 
        name: "Harshal",
        attendence: "85%",
        productivity: "good",
         age: 26
    }
]
// console.log(arr[1])
let newob={
    name: "pradeep",
    attendence: "70%",
    productivity: "excellent",
    age: 25

}


// arr.push(newob) 
// arr.pop()
// console.log(arr)



// map method-> Accepts call back function
// returns new array
// function ke andaar argument ko accet karna

let arname=arr.map((e)=>{return e.name})
console.log(arname);


//filter


let fl=arr.filter((e)=>{return e.age>23})
console.log(fl);