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
            <td align="center" onclick="Del('${key.id}')">Delete</i></td>
          </tr>
    `
  })
  
}

let Del=(id)=>{

      let url=`http://localhost:3000/College/${id}` 
  
      fetch(url,{method:"DELETE"})
    }
let Details=()=>{

    let inpname = document.querySelector('#name').value        
    let inpcourse = document.querySelector('#Course').value
    let inpbranch = document.querySelector('#branch').value
    let inpbus = document.querySelector('#bus').value
    let inptime = document.querySelector('#timing').value
    let inpadmi = document.querySelector('#admission').value
    let inppass = document.querySelector('#passout').value
    let inpnum = document.querySelector('#number').value

      let  url="http://localhost:3000/College"
      fetch(url,{method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
        {
            "name":inpname,
            "Course":inpcourse,
            "Branch":inpbranch,
            "number":inpnum,
            "Bus":inpbus,
            "Timig":inptime,
            "Admmision":inpadmi,
            "Passout":inppass
        })
      })
  return false
    }
