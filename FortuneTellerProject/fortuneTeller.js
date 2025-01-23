let momName = prompt("What is your mother's name?");
let streetName = prompt("What is the name of the street you grew up on?");
let favouriteColour = prompt("What was your favourite colour as a child?");
let age = Number(prompt("How old are you?"));
let randomNumber = Number(prompt("Choose a number between 1 and 10??"));

console.log(`In ${randomNumber} years you are going to meet your best friend named ${momName} ${streetName}. You will get married in ${age+randomNumber} years and have ${age%randomNumber} children. In ${Math.round(age/randomNumber)} years you are going to dye your hair ${favouriteColour}.`);