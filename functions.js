
function rand(num){
    //returns a number betweeen 0 and num
    var randNum = Math.random()*num;
    var result=Math.floor(randNum);
    var myPokemonRoster = ("Groudon")
    var myName = ("Kamari")
    return result + myPokemonRoster + myName;
}
console.log(rand(2));

var myDice = ['one', "two",'three','four','five','six']
console.log('You rolled a' + myDice(rand(0)))