// Function to take orders
function takeOrder() {
    let ingredient = prompt("Enter the main ingredient for the meal:").toLowerCase().replace(/ /g, '_');
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(response => response.json())
    .then(data => {
        if (data.meals === null) {
            alert("No meals found for the provided ingredient. Please try again.");
            takeOrder(); // Recursive call
        } else {
            let meals = data.meals;
            let randomIndex = Math.floor(Math.random() * meals.length);
            let randomMeal = meals[randomIndex];
            let order = {
                description: randomMeal.strMeal,
                orderNumber: getOrderNumber(),
                completionStatus: "incomplete"
            };
            storeOrder(order);
            alert(`Order taken!\nDescription: ${order.description}\nOrder Number: ${order.orderNumber}`);
        }
    })
    .catch(error => console.error('Error:', error));
}

// Function to generate unique order number
function getOrderNumber() {
    let orders = JSON.parse(sessionStorage.getItem('orders'));
    let lastOrderNumber = sessionStorage.getItem('lastOrderNumber') || 0;
    return lastOrderNumber + 1;
}

// Function to store order in sessionStorage
function storeOrder(order) {
    let orders = JSON.parse(sessionStorage.getItem('orders')) || [];
    orders.push(order);
    sessionStorage.setItem('orders', JSON.stringify(orders));
    sessionStorage.setItem('lastOrderNumber', order.orderNumber);
}

// Function to display and complete orders
function displayAndCompleteOrders() {
    let orders = JSON.parse(sessionStorage.getItem('orders')) || [];
    let incompleteOrders = orders.filter(order => order.completionStatus === "incomplete");
    if (incompleteOrders.length === 0) {
        alert("No incomplete orders found.");
        return;
    }
    let orderStr = "Incomplete Orders:\n";
    incompleteOrders.forEach(order => {
        orderStr += `Order Number: ${order.orderNumber}, Description: ${order.description}\n`;
    });
    let orderNumber = parseInt(prompt(orderStr + "\nEnter the order number to mark as complete (or enter 0 to cancel):"));
    if (orderNumber === 0) {
        return;
    }
    let orderToUpdate = orders.find(order => order.orderNumber === orderNumber);
    if (orderToUpdate) {
        orderToUpdate.completionStatus = "completed";
        sessionStorage.setItem('orders', JSON.stringify(orders));
        alert(`Order ${orderNumber} marked as completed.`);
    } else {
        alert(`Order ${orderNumber} does not exist.`);
    }
}

// Main function
function main() {
    let choice = parseInt(prompt("Choose an option:\n1. Take Order\n2. Display and Complete Orders\nEnter 0 to exit."));
    switch (choice) {
        case 1:
            takeOrder();
            break;
        case 2:
            displayAndCompleteOrders();
            break;
        case 0:
            return;
        default:
            alert("Invalid choice. Please try again.");
            main();
            break;
    }
}

// Run the main function
main();