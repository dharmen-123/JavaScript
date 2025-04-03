
let fetchData=async()=>{
     
    let url="http://localhost:3000/Hotel"
    let resp=await fetch(url,{method:"GET"})

    let data=await resp.json()
    console.log(data);
    

}

fetchData()