'use strict';


let check = document.querySelector('.check');
let guess = document.querySelector('.guess');
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let numberele = document.querySelector('.number');
let message = document.querySelector('.message');
let score = 20;
let again = document.querySelector('.again');
let highScore = 0;

check.addEventListener('click',function(){
    
    const guessNumber = Number(guess.value);
    console.log("guessNumber", guessNumber, typeof guessNumber);

if(!guessNumber){
    message.textContent = "No Number";
}else{

    if(guessNumber > secretNumber){
        if(score < 1){
            message.textContent = "You Lose The Game";
        }else{
            message.textContent = "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }

    }else if(guessNumber < secretNumber){
     
        if(score < 1){
            message.textContent = "You Lose The Game";
        }else{
            message.textContent = "Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
    }else{
        // Player Wins
    
        document.querySelector('.score').textContent = score;
        
        numberele.textContent = secretNumber;

        message.textContent = "Great You Win";
        document.body.style.backgroundColor = '#60b347';
        numberele.style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
}


    
});

again.addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 10) + 1
    guess.value = ' ';
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.body.style.backgroundColor = '#222';
    numberele.textContent = '?';
    message.textContent = "Start guessing...";
})