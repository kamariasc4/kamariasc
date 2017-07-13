function randLetter(lett) {
    //Letter from the alaphabet
    var randLett = Math.random()*lett;
    var result = Math.floor(randLett);
    return result;
}
console.log(randLetter(25));

var myArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
console.log(myArray[randLetter(25)]);


