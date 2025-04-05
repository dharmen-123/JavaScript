let DataFeching=async()=>{

    const url1="http://localhost:3000/College"

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
          </tr>
    `
  })
  
}
DataFeching()