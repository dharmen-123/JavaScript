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
            <td onclick="Upd('${key.id}')">Edit</td>
            </tr>
    `
  })
  
}

let Del=(id)=>{

      let url=`http://localhost:3000/College/${id}` 
      fetch(url,{method:"DELETE"})

    }

let Upd=async(id)=>{

   let url=`http://localhost:3000/College/${id}`
   let res = await fetch(url,{method:"GET"})

   let data=await res.json()
   console.log(data);
   let updform = document.querySelector('#updfrom')

       updform.innerHTML =`
       Enter Name : <input type="text" id="name" value="${data.name}" > <br><br>
     Enter Branch: 
     <select name="" id="branch" value="${data.Branch}">
        <option value="Select">Select</option>
        <option value="CSE">CSE</option>
        <option value="AIML">AIML</option>
        <option value="CSIT">CSIT</option>
        <option value="CSCY">CSCY</option>
        <option value="CE">CE</option>
        <option value="ME">ME</option>
        <option value="EX">EX</option>
     </select> <br><br>    
     Enter Course: <input type="text" id="Course" value="${data.Course}"> <br><br>
     Enter Number: <input type="number" id="number" value="${data.number}"> <br><br>
     Enter Bus: <input type="text" id="bus" value="${data.Bus}"> <br><br>    
     Enter College Timing: <input type="time" id="timing" value="${data.Timig}"> <br><br>
     Enter Admission: <input type="number" id="admission" value="${data.Admmision}"> <br><br>
     Enter Passout: <input type="number" id="passout" value="${data.Passout}"> <br><br>    
  
      <input type="submit" value="submit" onclick="return Finalupd("${data.id}")">
   `
}
let Finalupd=()=>{

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
