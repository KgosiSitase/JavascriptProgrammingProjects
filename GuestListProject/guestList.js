// Initialize an empty array to store the guest names
let guestList = [];

// Loop to ask the user to input names until the 11th guest
for (let i = 0; i < 11; i++) {
  // Ask the user to input a guest name
  let newGuest = prompt(`Enter the name of guest #${i + 1}:`);

  if (guestList.length < 10) {
    // If the guest list is not full, add the guest directly
    guestList.push(newGuest);
    console.log(`${newGuest} has been added to the guest list.`);
  }else if (newGuest === null || newGuest === ''){
    alert('Please enter guest names.');
  }else {
    // If the guest list is full, ask if the user wants to replace someone
    let replace = prompt("You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? (yes/no)");

    // Normalize the user input to lowercase for case-insensitive comparison
    replace = replace.toLowerCase();

    if (replace === 'yes') {
      // Ask the user to enter the name of the person they would like to replace
      let replaceName = prompt("Please enter the name of the person you would like to replace:");

      // Find the index of the person to replace in the first 10 guests
      let replaceIndex = guestList.indexOf(replaceName);

      if (replaceIndex !== -1) {
        // Replace the person at the found index with the new guest
        guestList[replaceIndex] = newGuest;
        console.log(`${newGuest} has replaced ${replaceName} on the guest list.`);
      } else {
        console.log(`${replaceName} was not found in the original guest list. No changes were made.`);
      }
    } else if (replace === 'no') {
      console.log("No changes were made to the guest list.");
      break; // Exit the loop if the user chooses not to replace anyone
    } else {
      console.log("Invalid input. Please enter 'yes' or 'no'.");
      i--; // Decrement the loop counter to repeat the current iteration
    }
  }
}

// Display the final guest list on a single line with each name separated by a comma
console.log("Final Guest List:", guestList.join(', '));