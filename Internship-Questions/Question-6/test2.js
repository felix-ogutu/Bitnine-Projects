const prompt=require('prompt-sync')()
const input = prompt("Enter numbers separated by commas:");
const numbers = input.split(',').map(Number);

console.log(numbers); // Array of numbers entered by the user
