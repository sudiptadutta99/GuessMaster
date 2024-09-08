let maxNumber;
let randomNumber;
let gameStarted = false;

document.getElementById('startGameBtn').addEventListener('click', function() {
    const maxInput = document.getElementById('maxNumberInput').value;
    maxNumber = parseInt(maxInput);
    
    if (!isNaN(maxNumber) && maxNumber > 0) {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        document.getElementById('maxNumberDisplay').textContent = maxNumber;
        document.getElementById('gameSection').style.display = 'block';
        document.getElementById('message').textContent = '';
        gameStarted = true;
    } else {
        document.getElementById('message').textContent = 'Please enter a valid number.';
    }
});

document.getElementById('submitGuessBtn').addEventListener('click', function() {
    if (!gameStarted) return;
    
    const guess = parseInt(document.getElementById('guessInput').value);
    
    if (isNaN(guess)) {
        document.getElementById('message').textContent = 'Please enter a valid guess.';
        return;
    }
    
    if (guess === randomNumber) {
        document.getElementById('message').textContent = `You are right! The number was ${randomNumber}.`;
        gameStarted = false;
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'Hint: Your guess is too small.';
    } else {
        document.getElementById('message').textContent = 'Hint: Your guess is too large.';
    }
});

// const max = prompt("enter the max number");
// const random = Math.floor(Math.random() * max) +1;
// let guess = prompt("guess the number");

// while(true) {
//     if(guess == "quit") {
//         console.log("user quit");
//         break;
//     }
//     if (guess == random) {
//         console.log("you aree right! congrats! random number was ", random);
//         break;
//     } else if (guess < random) {
//         prompt("Hint: your guess was too SMALL, please try again");
//     } else  {
//         prompt("Hint: your guess was too LARGE, please try again");

//     }

//     // } else {
//     //     guess = prompt("your guess was wrong, please try again");
//     // }

// }