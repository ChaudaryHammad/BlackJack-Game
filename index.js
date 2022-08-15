
    let cards =[];
 
    let sum = 0;
    let hasBlackJack = false;
    
    let isAlive = false;
    let message = "";

    let messageEl =document.getElementById("message-el"); 
    let sumEl = document.getElementById("sum-el");
    let cardEl = document.getElementById("card-el");
    let playerEl = document.getElementById("player-el");
    
   


let player = {

     name:"Hammad",
     chips: 100,
    
}

playerEl.textContent = player.name+" : $ "+player.chips;
// random functions

function getRandomCard()
{
    let randomnumber = Math.floor(Math.random()*13)+1;
    if(randomnumber>10)
    {
        return 10;
    }
    else if(randomnumber ===1)
    {
        return 11;
    }

    else{
    return randomnumber;
    }
}


 
function startGame()
{
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard+secondCard;
    isAlive = true;
    renderGame();
}

function renderGame()
{
    cardEl.textContent = "Cards : ";
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent += cards[i]+" ";
    }
    
    
    sumEl.textContent = "Sum : "+sum;
    if (sum <= 20)
    {
        message = "Do you want to draw a new card ";
     
    }
    else if(sum === 21)
    {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true; 
    }
    else{
        message="You are out of game!";
        isAlive = false;
    }
    
    
    messageEl.textContent = message;
}

function newCard()
{
    if(isAlive === true && hasBlackJack === false)
    {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}
}

function reset()
{
    cardEl.innerText = "Cards: ";
    messageEl.innerText = "Want to Play a round?"
    sumEl.innerText = "Sum:";
}

