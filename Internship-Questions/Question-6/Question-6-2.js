const prompt = require("prompt-sync")();
function findMissingNumber(arr) {
    const presentNumbers = Array(46).fill(false); // Index 0 to 45, initialized as not present

    for (const num of arr) {
        presentNumbers[num] = true; // Mark the number as present
    }

    for (let i = 1; i <= 45; i++) {
        if (!presentNumbers[i]) {
            return i; // Missing number found
        }
    }
}

const input = prompt("Enter the numbers :");
const numbers = input.split(',').map(Number); // Array of the first 45 numbers with one missing
const missingNumber = findMissingNumber(numbers);
console.log("Missing number:", missingNumber);
