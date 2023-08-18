//Import the prompt-sync
const prompt = require("prompt-sync")();

//Write the function to confirm the Palindrome
function checkPalindrome(inputWord) {
    //Initialize the reversedWord to empty string
    let reversedWord = "";
    for (let i = inputWord.length - 1; i >= 0; i--) {
        reversedWord += inputWord[i];
    }
    //The inputWord is the same as the reversed word return the Palindrome
    if (word === reversedWord) {
        return "Palindrome";
    }
    //If the inputWord is not equal to the inputWord return the reversedWord:
    else {
        return reversedWord;
    }
}

// Example usage
const userInput = prompt("Enter required word:");
const result = checkPalindrome(userInput);
console.log(result);

