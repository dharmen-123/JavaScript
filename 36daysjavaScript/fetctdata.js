let fetchData=async()=>{

    let url="http://localhost:3000/hotel"

    let resp = await fetch(url,{method:"GET"})

    let data = await resp.json()
    console.log(data);
    
    let tabledata=document.querySelector('#tabledata')

    data.map((a)=>{
       
        tabledata.innerHTML +=`
            <tr>
              <td>${a.name} </td>
              <td>${a.age} </td>
              <td>${a.addhar-no} </td>
              <td>${a.Mo.Number} </td>
              <td>${a.Time} </td>
              <td>${a.checkin} </td>
              <td>${a.person} </td>
              <td>${a.price} </td>
            </tr>

        `

    })

}

fetchData()
