// Global array of integers
let integersArray = [105, 75, 60];

// Function to find and return the sum of all elements in the array
function findSum() {
    let arraySum = 0;
    for (let i = 0; i < integersArray.length; i++) {
        arraySum += integersArray[i];
    }
    return arraySum;
}
console.log(findSum());  

// Function to subtract the second element from the first element
function subtractNumbers() {
    let result = integersArray[0] - integersArray[1];
    return result;
}
console.log(subtractNumbers());  

// Function to multiply the first element with the third element
function multiplyNumbers() {
    let result = integersArray[0] * integersArray[2];
    return result;
}
console.log(multiplyNumbers());  

// Function to divide the sum of the array elements by the last element
function divideNumbers() {
    let sumDivide = findSum() / integersArray[2];
    // Check for division by zero
    if (integersArray[2] === 0) {
        console.log("Error: Division by zero.");
        return undefined;
    }
    return sumDivide;
}
console.log(divideNumbers());  