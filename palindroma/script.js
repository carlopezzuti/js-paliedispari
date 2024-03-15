const userWord = prompt("Inserisci una parola");
const result = isPalindrome(userWord)

if (result === true){
    alert("La parola è palindroma")
}
else {
    alert("la parola non è palindroma")
}

function isPalindrome(word) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        
        if (word[i] !== word[word.length - 1 - i]) {  
            return false;
        }
        else {
            return true;
        }
    }  
}

console.log(userWord, result);