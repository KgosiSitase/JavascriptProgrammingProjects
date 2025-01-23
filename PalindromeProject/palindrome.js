// Get user input
let userInput = prompt("Please enter a word:");

// Remove spaces and convert to lowercase for a more accurate check
const cleanedWord = userInput.replace(/\s/g, '').toLowerCase();//A string method that uses a regular expression to replace all occurrences of whitespace characters with an empty string

// Use a while loop to check if the word is a palindrome
let i = 0;
let j = cleanedWord.length - 1;
let isPalindrome = true;

while (i < j) {
    if (cleanedWord[i] !== cleanedWord[j]) {
        isPalindrome = false; // Not a palindrome
        break;
    }
    i++;
    j--;
}

// Display the result
if (isPalindrome) {
    console.log(`${userInput} is a palindrome`);
} else {
    console.log(`${userInput} is not a palindrome`);
}