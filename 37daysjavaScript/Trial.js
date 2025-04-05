let DataFeching=async()=>{

    let url1="http://localhost:3000/College"

    let response= await fetch(url1 ,{method:"GET"})

    let data1=await response.json()

    console.log(data1);
    
 let  datashow = document.querySelector('#show')

    data1.map((key)=>{   
    datashow.innerHTML+=`
          <tr>
            <td>${key.name}</td>
            <td>${key.Course}</td>
            <td>${key.Branch}</td>
            <td>${key.number}</td>
            <td>${key.Bus}</td>
            <td>${key.Timig}</td>
            <td>${key.Admmision}</td>
            <td>${key.Passout}</td>
            <td align="center" onclick="Del('${key.id}')"><i class="fa-solid fa-trash"></i></td>
          </tr>
    `
  })
  
}

let Del=(id)=>{

      let url=`http://localhost:3000/College/${id}` 
  
      fetch(url,{method:"DELETE"})
    }

DataFeching()
