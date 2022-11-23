// age=="100" show true even when age=100(int) 
//basically coverts the string to the types in left to make true.
// age===100 tries to match datatypes

let firstCard=Math.floor((Math.random()*10)+2) //0-11
let secondCard=Math.floor((Math.random()*10)+2)

let cards = [firstCard, secondCard]
let sum = firstCard+secondCard
let age=21  //parseInt(prompt('Entere second number: '))
let blackJack=false
let isAlive=true
let message=""

let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
//let sumEl=document.getElementById("sum-el")

let cardEl=document.getElementById("card-el")
//let cardEl=document.getElementById("card-el")
//console.log("firstCard:"+firstCard)
//console.log("secondCard:"+secondCard)

let player={
    name:'Per',
    chips: '$145'
}

let playerEl=document.getElementById('player-el')
playerEl.textContent=player.name+": "+player.chips
function startGame(){
    renderGame()
}
function renderGame(){
    if (age>=21){
        //console.log("Welcome to the club")
        message="Welcome to the club"
        messageEl.textContent=message
        sumEl.textContent="Sum: "+sum
        cardEl.textContent= "Cards: "
        for (let i=0; i<cards.length; i++){
            cardEl.textContent += cards[i]+" "
        }
        
        if (sum<=20){
            message="Want to draw new card?"
        }else if(sum==21){
            message="You got a BlackJack"
            blackJack=true
        }else {
            message="You're out of game"
            isAlive=false
        }
        messageEl.textContent=message
        //console.log("blackJack: "+blackJack)
        //console.log("Is Alive: "+isAlive)
        //console.log(message)
    }
    else{
        message="You cannot enter the club"
        messageEl.textContent=message
        //console.log("You cannot enter the club")
    }
}
function newGame(){
    let card=Math.floor((Math.random()*10)+2)
    cards.push(card)
    sum+=card
    renderGame()
}


