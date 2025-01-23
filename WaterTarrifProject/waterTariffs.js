// Know if user is from an indigent household to determine if free
let indigent = prompt('Are you from an indigent household?(yes/no)');
let indigentLow = indigent.toLowerCase();


// Get user input for litres used
let litresUsed = prompt("How many litres of water have you used?");

// Convert user input to a number
litresUsed = parseFloat(litresUsed);

// Validate user input
if (typeof litresUsed !== 'number' || litresUsed < 0) {
    console.log("Invalid input. Please enter a valid number of litres.");
} else {
    // Constants for water steps
    const STEP_1_RATE = 15.73;
    const STEP_2_RATE = 22.38;
    const STEP_3_RATE = 31.77;
    const STEP_4_RATE = 69.76;

    // Water step values
    const STEP_1_Value = 6000;
    const STEP_2_Value = 10500;
    const STEP_3_Value = 35000;

    // Initialize total cost
    let totalCost = 0;

    // Make sure whether coming from indigent household
    if (indigent === "yes"){
        if (litresUsed <= 10500) {
            totalCost = 0;// Indigent household is free
        } else if (litresUsed <= STEP_1_Value) {
            totalCost = litresUsed * (STEP_1_RATE / 1000); // Convert rate to per litre
        } else if (litresUsed <= STEP_2_Value) {
            totalCost = (STEP_1_Value * (STEP_1_RATE / 1000)) + ((litresUsed - STEP_1_Value) * (STEP_2_RATE / 1000));
        } else if (litresUsed <= STEP_3_Value) {
            totalCost = (STEP_1_Value * (STEP_1_RATE / 1000)) + ((STEP_2_Value - STEP_1_Value) * (STEP_2_RATE / 1000)) + ((litresUsed - STEP_2_Value) * (STEP_3_RATE / 1000));
        } else {
            totalCost = (STEP_1_Value * (STEP_1_RATE / 1000)) + ((STEP_2_Value - STEP_1_Value) * (STEP_2_RATE / 1000)) + ((STEP_3_Value - STEP_2_Value) * (STEP_3_RATE / 1000)) + ((litresUsed - STEP_3_Value) * (STEP_4_RATE / 1000));
        }
    } else if (indigent === "no"){
        if (litresUsed <= STEP_1_Value) {
            totalCost = litresUsed * (STEP_1_RATE / 1000); // Convert rate to per litre
        } else if (litresUsed <= STEP_2_Value) {
            totalCost = (STEP_1_Value * (STEP_1_RATE / 1000)) + ((litresUsed - STEP_1_Value) * (STEP_2_RATE / 1000));
        } else if (litresUsed <= STEP_3_Value) {
            totalCost = (STEP_1_Value * (STEP_1_RATE / 1000)) + ((STEP_2_Value - STEP_1_Value) * (STEP_2_RATE / 1000)) + ((litresUsed - STEP_2_Value) * (STEP_3_RATE / 1000));
        } else {
            totalCost = (STEP_1_Value * (STEP_1_RATE / 1000)) + ((STEP_2_Value - STEP_1_Value) * (STEP_2_RATE / 1000)) + ((STEP_3_Value - STEP_2_Value) * (STEP_3_RATE / 1000)) + ((litresUsed - STEP_3_Value) * (STEP_4_RATE / 1000));
        }
    } else {
        console.log("Please answer 'yes' or 'no'");
    }

    // Round total cost to two decimal places
    totalCost = totalCost.toFixed(2);

    console.log("Amount Owed for water bill: R" + totalCost);
}



