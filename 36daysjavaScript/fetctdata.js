let fetchData=async()=>{
     
    let url="http://localhost:3000/Hotel"
    let resp=await fetch(url,{method:"GET"})

    let data=await resp.json()
    console.log(data);
    
    let tabledata=document.querySelector('#tabledata')

    data.map((e)=>{
       
        tabledata.innerHTML+=`
            <tr>
              <td>${e.name} </td>
              <td>${e.age} </td>
              <td>${e.addhar} </td>
              <td>${e.Time} </td>
              <td>${e.person} </td>
            </tr>
        
        
        `

    })


}
fetchData()
// let Ardata=[
//     {
//         "name":"dharmendra",
//        "age":20,
//        "addhar":30284,
//        "Time":"10:20",
//        "person":5
//     },
//     {
//         "name":"dharmendra",
//        "age":20,
//        "addhar":30284,
//        "Time":"10:20",
//        "person":5
//     },
//     {
//         "name":"dharmendra",
//        "age":20,
//        "addhar":30284,
//        "Time":"10:20",
//        "person":5
//     }
// ]
// let newob={
//     name: "pradeep",
//     age: 25,
//     addhar: "excellent",
//     Time:"20:21",
//     person:6

// }
// Ardata.push(newob) 

// let ans=Ardata.map((key)=>{return })