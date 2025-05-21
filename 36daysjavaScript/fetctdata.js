let fetchData=async()=>{
    let url="http://localhost:3000/hotel"
    let resp = await fetch(url,{method:"GET"})
    let data = await resp.json()
    console.log(data);
    let tabledata=document.querySelector('#table-data')

    data.map((key)=>{
       
        tabledata.innerHTML+=`
            <tr>
              <td>${key.name} </td>
              <td>${key.age} </td>
              <td>${key.addharno} </td>
              <td>${key.MoNumber} </td>
              <td>${key.Time} </td>
              <td>${key.checkin} </td>
              <td>${key.person} </td>
              <td>${key.price} </td>
            </tr>
        ` })

}

fetchData()
