// <!-- local storage

// set item - save karana hai
// get item -  save hai retrieve karana hai
// remove item - particular data ko delete kaarna hai
// clear  local - function me jitna bhi data hai sabko clear karne ke kaam me ata hai -->


// local storage me data set key value ke formate me hoga 
// key value ka type string hoga

//                      key      value
localStorage.setItem("Username","Harsh")
localStorage.setItem("Userage","21")
localStorage.setItem("Usercontact","123456789")

let name=localStorage.getItem("Username")
// console.log(name)
let age=localStorage.getItem("Userage")
// console.log(age)

localStorage.removeItem('Userage')  // removes perticular item
localStorage.clear()    //removes all data




let obj={
    name:"Harsh", contact:123456789, city:"Bhopal"
}
localStorage.setItem("userdata",JSON.stringify(obj))

let user=JSON.parse(localStorage.getItem('userdata'))
// console.log(user.city)
.JSON.stringify 