let favoriteSport = prompt ("What is your favorite sport ?")
console.log (favoriteSport)

let sportName = document.querySelector ("#sportName")
sportName.innerHTML = `${sportName.innerHTML} <strong style = color:red> ${favoriteSport} </strong>`

if (favoriteSport.length > 0) {console.log(favoriteSport)}
else { alert ("Bilginizi Giriniz")}
    
    
let lastChild = document.querySelector ("ul#list>li:last-child")
lastChild.innerHTML = "judo"

let firstChild = document.querySelector ("ul#list>li:first-child")
firstChild.innerHTML = "BOXING"

let ulDOM = document.querySelector ("ul#list")
let liDOM = document.createElement ("li")
liDOM.innerHTML = "JUST BOXING"
//ulDOM.append (liDOM)
ulDOM.prepend (liDOM)

let ulList = document.querySelector ("ul#list")
let liList = document.createElement ("li")
liList.innerHTML = "Brazilian Jiu Jitsu"
ulList.append (liList)

document.body.style.backgroundColor = "blue"