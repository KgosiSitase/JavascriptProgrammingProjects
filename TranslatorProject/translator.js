// Create a map for English to French translation
const translationMap = new Map([
    ['hello', 'bonjour'],
    ['play', 'jouer'],
    ['goodbye', 'au revoir'],
    ['school', 'école'],
    ['animals', 'animaux'],
    ['car', 'voiture'],
    ['computer', 'ordinateur'],
    ['mother', 'mère'],
    ['friend', 'ami'],
    ['father', 'père']
  ]);
  
  // Ask the user what word they would like to translate
  let userWord = prompt("Please enter an English word to translate:");
  
  // Convert the user input to lowercase for case-insensitive comparison
  userWord = userWord.toLowerCase();
  
  // Check if the user input exists in the translation map
  if (translationMap.has(userWord)) {
    // Output the translated word
    let translatedWord = translationMap.get(userWord);
    console.log(`The translation of "${userWord}" is "${translatedWord}".`);
  } else {
    console.log(`Sorry, unfortunately the translation for "${userWord}" is not available.`);
  }