// Define a function hide that takes in a string as an argument, representing a hiding location.
function hide(location) {
    // This variable will store the hiding location
    let hideLocation = location;

    // Inside the hide function, the function seek returns the hidden location when called.
    function seek() {
        return hideLocation;
    }

    // The hide function should return the seek function, creating a closure around hideLocation.
    return seek;
}

// Call hide with a string argument describing your hiding spot and assign the return value to a new variable called startGame.
let startGame = hide("Secret Room");

// This should print your hiding location, demonstrating the concept of a closure.
console.log(startGame()); 


// The following line will result in an error because hideLocation is not accessible outside the hide function.
console.log(hideLocation);