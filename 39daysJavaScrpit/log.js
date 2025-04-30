function sinup()
{
    let spname=document.querySelector('#uname').value
    let spass=document.querySelector('#upass').value

    if(spname=="")
    {
        alert("Enter username")
        document.querySelector('#uname').focus()
        return false
    }
    else if(spass=="")
        {
            alert("Enter password")
            document.querySelector('#upass').focus()
            return false
        }
    

    else if(!(spass.match(/[#@_]/)))
    {
        alert("Please use special characters")
        document.querySelector('#upass').focus()
        return false
    }
        localStorage.setItem("username",spname)
        localStorage.setItem("password",spass)
         
        
location.href="./login.html"
return false

}

function logine()
{
    let lgname=document.querySelector('#lgname').value
    let lgpass=document.querySelector('#lgpass').value

    let name=localStorage.getItem("username")
    let password=localStorage.getItem("password")
    console.log(name , password);

    if(lgname==name && lgpass==password)
    {
        document.writeln("<h1>Login successful</h1>")
    }
    else{
        alert("User not found")
    }
    return false
}