// Define the higher-order function myFilterFunction
function myFilterFunction(wordsArray, callback) {
    const filteredWords = [];
  
    // Iterate through the array of words
    for (let i = 0; i < wordsArray.length; i++) {
      const word = wordsArray[i];
      
      // Check if the word has six letters using the callback function
      if (callback(word)) {
        filteredWords.push(word);
      }
    }
  
    return filteredWords;
}
  
    // Example callback function to check if a word has six letters
    function checkSixLetters(word) {
    return word.length === 6;
    }
  
  // Example usage
  const wordsArray = ["Bring", "Food", "Loaded", "Soccer", "People", "House", "Dog", "Gamer", "Developer", "Laptop" ];
  
  const result = myFilterFunction(wordsArray, checkSixLetters);

  console.log(result);