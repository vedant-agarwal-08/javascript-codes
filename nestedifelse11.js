let winningnumber=19;
let userguess=+prompt("Guess a number");
if (userguess===winningnumber){
    console.log("your guess is right");
}else{
    if(userguess<winningnumber){
        console.log("too low!");
    }else{
        console.log("too high");
    }
}