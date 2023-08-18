//Palindrome -word, phrase, number or sequence of characters that reads
// the same forward as it does backwards.
const prompt = require("prompt-sync")();
function isPalindrome(word){
    //Convert the word to lowercase to ensure case-insensitive
    //comparison
    word=word.toLowerCase();
    //Remove any non-alphanumeric characters using the regular expression
    word=word.replace(/[^a-z0-9]/g, '')

    //Compare the original word with its reverse
    return word===word.split('').reverse().join('');

}

//Test the function
// const inputWord="level";
//Get the value from the user
const inputWord=prompt("Enter the required word:")
if(isPalindrome(inputWord)){
    console.log(`${inputWord} is a palindrome.`);
}
else {
    console.log(`${inputWord} is not a palindrome`);
}