        // Object in Array

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
// console.log(arr[0])
let newob={
    name: "pradeep",
    attendence: "70%",
    productivity: "excellent",
    age: 25

}

arr.push(newob) 
// ar2.pop()
// console.log(arr)



// map method-> Accepts call back function
// returns new array
// function ke andaar argument ko accet karna

let arname=arr.map((e)=>{return e.name})

// console.log(arname);

let ar2 =arr.map((a)=>{return a.attendence })
// console.log(ar2);
// let ar3= arr.map((value,index)=>{
//     console.log(value,index);
    
//  })
// console.log(ar3);

    //filter
// In filter method inside the function condition is passed if condition is true then it is working

let fl = arr.filter((e)=>{return e.age>23})
// console.log(fl);

let f2=[29,32,10,23,20,40,28]
let fr2 = f2.filter((v)=>{
    return v < 10
})
console.log(fr2,f2)

