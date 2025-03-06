function form(){
    let name =document.querySelector('#name').value 
    let email =document.querySelector('#email').value
    let age =document.querySelector('#age').value
        
       if(name==""){
        // alert("please Enter your name")
          let errorname =document.querySelector('#nameerror')
          errorname.innerHTML="Please Enter your name"
        document.querySelector('#name').focus()
        return false
       }
       else if(email==""){
        alert("please Enter your email")
        document.querySelector('#email').focus()
        return false
      }
      else  if(!(email.includes('@gmail.com'))){
         alert("Please valid email must have @gmail.com")
         document.querySelector('#email').focus()
       return false
      }
      else if(age==""){
        alert("please Enter your age")
        document.querySelector('#age').focus()
        return false
      }
      else if(isNaN(age)){
        alert("Please Enter the number")
        document.querySelector('#age').focus()
     return false
      }

}