function form(){
    let name =document.querySelector('#name').value 
    let email =document.querySelector('#email').value
    let age =document.querySelector('#age').value
    let pass =document.querySelector('#pass').value
        
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
      else  if(!(email.includes('@'))){
         alert("Please valid email must have @")
         document.querySelector('#email').focus()
       return false
      }
      else  if(!(email.includes('yahoo.com'))){
        alert("Please valid email must have yahoo.com")
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
      else if(age>=100){
        alert("Age is not more than two digit")
        document.querySelector('#age').focus()
        return false
      }
      else if(pass==""){
        alert("please Enetr the password")
        document.querySelector('#pass').focus()
        return false
      }
      else if(!(pass.match(/[@_#]/))){
        alert("please use speacial character")
        document.querySelector('#pass').focus()
        return false
      }

}