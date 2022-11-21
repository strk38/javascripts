
let firsVal = parseFloat(prompt('Entere frst number: '))//document.getElementById('val_First')
let seconVal = parseFloat(prompt('Entere second number: '))//document.getElementById('val_Second')
let operator =prompt('Entere operator: ')//document.getElementById('operator')

let result=document.getElementById('result')

let v=0

//let message="Previous value : "

switch(operator){
    case '+':
        //let add=firsVal+seconVal;
        result.innerText="The result is "+sum(firsVal,seconVal)//add
        break;
    case '-':
        //let minus=firsVal-seconVal;
        result.innerText="The result is "+sub(firsVal,seconVal)//minus;
        break;
    case '*':
        //let multip=firsVal*seconVal;
        result.innerText="The result is "+mul(firsVal,seconVal)//multip;
        break;
    case '/':
        //let divide=firsVal/seconVal;
        result.innerText="The result is "+div(firsVal,seconVal)//divide;
        break;
}



function sum(f,s){
    let val=f+s
    return val
    //let data = message+v
    //oldValue.textContent=data
    //v+=1
    //countEl.innerText=v
}
function sub(f,s){
    let val=f-s
    return val

}
function mul(f,s){
    let val=f*s
    return val

}
function div(f,s){
    let val=f/s
    return val

}