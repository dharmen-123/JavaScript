
function sign(){
  let uname=document.querySelector('#uname').value
  let upass=document.querySelector('#upass').value
     if(upass==""){
        alert("please Enetr the password")
        document.querySelector('#upass').focus()
        return false
      }
      else if(!(upass.match(/[@_#]/))){
        alert("please use speacial character")
        document.querySelector('#pass').focus()
        return false
      }
      localStorage.setItem("Username",uname)
      localStorage.setItem("Userpass",upass)
           
location.href="./login.html"
      return false
}


function log(){
  let loginname=document.querySelector('#loginname').value
  let loginpass=document.querySelector('#loginpass').value

  let name=localStorage.getItem("Username")
  let password=localStorage.getItem("Userpass")

  if(loginname == name && loginpass==password){
    document.writeln( "<h1>🙏Login Successful 🙏😊</h1>")
  }
  else{
    alert("User Not found");
  }
 return false
}