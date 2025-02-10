// Initialize session storage if empty
if (!sessionStorage.getItem('income')) {
    sessionStorage.setItem('income', JSON.stringify([
        { name: "Salary", amount: 4000, recurring: true },
        { name: "Freelance", amount: 1000, recurring: false },
        { name: "Investment", amount: 500, recurring: true },
        { name: "Gift", amount: 200, recurring: false },
        { name: "Bonus", amount: 800, recurring: false }
    ]));
}

if (!sessionStorage.getItem('expenses')) {
    sessionStorage.setItem('expenses', JSON.stringify([
        { name: "Groceries", amount: 350, recurring: true },
        { name: "Rent", amount: 1000, recurring: true },
        { name: "Utilities", amount: 200, recurring: true },
        { name: "Entertainment", amount: 150, recurring: false },
        { name: "Transportation", amount: 100, recurring: true }
    ]));
}

// Function to calculate total disposable income
function calculateDisposableIncome() {
    let income = JSON.parse(sessionStorage.getItem('income'));
    let expenses = JSON.parse(sessionStorage.getItem('expenses'));
    let totalIncome = 0;
    let totalExpenses = 0;

    // Calculate total income
    income.forEach(item => totalIncome += item.amount);

    // Calculate total expenses
    expenses.forEach(item => totalExpenses += item.amount);

    // Calculate disposable income
    let disposableIncome = totalIncome - totalExpenses;

    // Prompt user for savings input
    let savings = parseFloat(prompt("How much disposable income would you like to put into savings?"));

    // Ensure savings input is a valid number
    if (isNaN(savings) || savings < 0) {
        alert("Invalid savings amount. Please enter a valid number.");
        return;
    }

    // Update disposable income after savings
    disposableIncome -= savings;

    // Display total disposable income left
    alert("Total disposable income left: R" + disposableIncome.toFixed(2));
}

// Function to display income items and add a new entry
function displayIncome() {
    let income = JSON.parse(sessionStorage.getItem('income'));
    let incomeString = "Income Items:\n";
    income.forEach(item => incomeString += `${item.name}: R${item.amount.toFixed(2)}\n`);
    incomeString += "\nAdd another entry in the format: name, amount, recurring (true/false)";

    let newEntry = prompt(incomeString);

    if (newEntry) {
        let [name, amount, recurring] = newEntry.split(',').map(item => item.trim());
        if (name && !isNaN(parseFloat(amount)) && (recurring.toLowerCase() === 'true' || recurring.toLowerCase() === 'false')) {
            income.push({ name, amount: parseFloat(amount), recurring: recurring.toLowerCase() === 'true' });
            sessionStorage.setItem('income', JSON.stringify(income));
            alert("New income entry added successfully!");
        } else {
            alert("Invalid entry. Please use the format: name, amount, recurring (true/false)");
        }
    }
}

// Function to display expense items and add a new entry
function displayExpenses() {
    let expenses = JSON.parse(sessionStorage.getItem('expenses'));
    let expenseString = "Expense Items:\n";
    expenses.forEach(item => expenseString += `${item.name}: R${item.amount.toFixed(2)}\n`);
    expenseString += "\nAdd another entry in the format: name, amount, recurring (true/false)";

    let newEntry = prompt(expenseString);

    if (newEntry) {
        let [name, amount, recurring] = newEntry.split(',').map(item => item.trim());
        if (name && !isNaN(parseFloat(amount)) && (recurring.toLowerCase() === 'true' || recurring.toLowerCase() === 'false')) {
            expenses.push({ name, amount: parseFloat(amount), recurring: recurring.toLowerCase() === 'true' });
            sessionStorage.setItem('expenses', JSON.stringify(expenses));
            alert("New expense entry added successfully!");
        } else {
            alert("Invalid entry. Please use the format: name, amount, recurring (true/false)");
        }
    }
}