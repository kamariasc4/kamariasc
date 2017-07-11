var playerChoice = 'r';

var choices = ['r', 'p','s'] 
var compChoice = choices[Math.floor(Math.random()*3)]

if (playerChoice == compChoice){
    console.log("It's a tie")
}
if (playerChoice =='r' && compChoice =='p'){
    console.log('Rock loses to paper. You lose');
}
if (playerChoice == 'r' && compChoice =='p'){
    console.log('Rock beats scissor. You win')
}