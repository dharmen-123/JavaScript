        // Array in Object


let arr=[
    
    {
        name: "Dhamendra",
        attendence: "95%",
        productivity: "Normal",
        age: 20
    },
        
    { 
        name: "Avanish",
        attendence: "75%",
        productivity: "excellent",
         age: 19
    },
    
    { 
        name: "Amit",
        attendence: "85%",
        productivity: "good",
         age: 21
    }
]
console.log(arr[0])
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
// console.log(arname);


//filter


let fl=arr.filter((e)=>{return e.age>23})
// console.log(fl);