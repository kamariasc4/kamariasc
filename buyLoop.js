// var prompt = require('prompt-sync')();
// // 
// // get input from the user. 
// // 
// var n = prompt('How many more times? ');
// console.log('You have 1000 dollars');
// var bank = 1000 // start the player with 100 dollars

// var inventory = ["Hyrule sword", "Potion", "Sheild", "Bow"];

// //prompt the user to buy item
// for (var x =0; x < inventory.length; x++){
//     var answer = prompt('Would you like to buy a ' + inventory[x]);


// if(answer === 'yes'){
//     bank = bank - 100;
//     console.log('You have' + bank + "left");
// }}
var promptSync = require('prompt-sync')();

var money = 1000;
var items = [];

while(money>99){
  console.log("You have $"+ money +" left. Sword = $500, Food = $100");
  var answer = promptSync("Which item do you want to buy? ");
  if(answer == "Sword"& money>499){
    money = money - 500;
    items.push("Sword");
    console.log("You bought a Sword!");
  }else if(answer == "Food"){
    money = money - 100;
    items.push("Food");
    console.log("You bought Food!");
  }else{ 
    console.log("You dont have enough money. Please try again");
  }
}
