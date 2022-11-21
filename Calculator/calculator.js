let num1=parseFloat(prompt("Enter first number: "))
let num2=parseFloat(prompt("Enter second number: "))

document.getElementById('num1').textContent = num1
document.getElementById('num2').textContent = num2

let answer=document.getElementById('result')

function sum(){
    let val=num1+num2
    answer.textContent = "Result: "+val
    //let data = message+v
    //oldValue.textContent=data
    //v+=1
    //countEl.innerText=v
}
function sub(){
    let val=num1-num2
    answer.textContent = "Result: "+val
}
function mul(){
    let val=num1*num2
    answer.textContent = "Result: "+val
}
function div(){
    let val=num1/num2
    answer.textContent = "Result: "+val
}