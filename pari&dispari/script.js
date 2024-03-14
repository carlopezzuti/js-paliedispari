const playerOddOrEven = prompt("Scegli: DISPARI O PARI");
const playerNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
const cpuChoice = randomNumber();
const sum = cpuChoice + playerNumber;
const result = isEvenOrOdd(sum);

if (playerOddOrEven === result) {
    alert("Hai vinto!")}
    else {
    alert("Hai perso")
    }

function randomNumber(min, max) { 
    return Math.floor(Math.random() * 5) + 1; 
}

function isEvenOrOdd(num) {
    let gameResult = "DISPARI";
    
    if (num % 2 == 0) {
        gameResult = "PARI";
    }
    return gameResult;
}