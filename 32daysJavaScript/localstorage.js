// <!-- local storage

// set item - save karana hai
// get item -  save hai retrieve karana hai
// remove item - particular data ko delete kaarna hai
// clear  local - function me jitna bhi data hai sabko clear karne ke kaam me ata hai -->


// local storage me data set key value ke formate me hoga 
// key value ka type string hoga
let naam = prompt("Enter your name")
//                      key      value
localStorage.setItem("Username",naam)
localStorage.setItem("Userage","20")
localStorage.setItem("Usercontact","92726228")

let name=localStorage.getItem("Username")
console.log(name)
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
// .JSON.stringify 