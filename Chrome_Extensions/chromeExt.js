
let myLeads=['www.awesomelead.com','www.eoiclead.com','www.greatlead.com']
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

let outPut=document.getElementById("output")

inputBtn.addEventListener("click",function(){
    //let val=prompt("Enter url: ")

    myLeads.push(inputEl.value) //val
    //"www.awesome.com"
    p()
    //return print() //outPut.textContent=myLeads
})
function print(){
    ulEl.innerHTML= " "
    for (let i=0; i<myLeads.length;i++){
        ulEl.innerHTML +="<li>"  + myLeads[i] +"</li> "
    }
}
function print_p(){
    ulEl.innerHTML= " "
    for (let i=0; i<myLeads.length;i++){
        const li=document.createElement("li")
        li.textContent=myLeads[i]
        ulEl.append(li)
    }
}
function p(){
    let lItems= " "
    for (let i=0; i<myLeads.length;i++){
         lItems +=
         `
            <li>
                <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
            </li>
         `
    }
    ulEl.innerHTML=lItems
}

