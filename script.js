// 1. Store Application Data
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 2. Create Reusable Functions
// Calculates the difference between the budget and total expenses
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Outputs formatted, clean summaries straight to the browser console
function displayBudgetSummary(budget, expenses, balance) {
    console.log("====================================");
    console.log("       SPENDWISE BUDGET SUMMARY     ");
    console.log("====================================");
    console.log(`Initial Monthly Budget : $${budget.toFixed(2)}`);
    console.log(`Total Tracked Expenses : $${expenses.toFixed(2)}`);
    console.log("------------------------------------");
    console.log(`Remaining Balance      : $${balance.toFixed(2)}`);

    // Contextual evaluation feedback
    if (balance < 0) {
        console.log("Warning: You have exceeded your monthly budget!");
    } else if (balance === 0) {
        console.log("Alert: You have reached exactly zero balance.");
    } else {
        console.log("Great job! You are successfully staying under budget.");
    }
    console.log("====================================");
}

// Main execution process
function runSpendWise() {
    // 3. Collect User Input via browser prompts
    let budgetInput = prompt("Enter your total monthly budget (\$):");
    let expenseInput = prompt("Enter your total expenses (\$):");

    // Explicit type conversion to numeric floats
    monthlyBudget = parseFloat(budgetInput);
    totalExpenses = parseFloat(expenseInput);

    // Operational sanity check
    if (isNaN(monthlyBudget) || isNaN(totalExpenses)) {
        console.error("Error: Please provide valid numbers for your inputs.");
        alert("Invalid numbers detected. Please refresh the page and try again.");
        return;
    }

    // 4. Perform Budget Calculations using core functions
    remainingBalance = calculateBalance(monthlyBudget, totalExpenses);

    // 5. Display Results
    displayBudgetSummary(monthlyBudget, totalExpenses, remainingBalance);
}

// Run the script directly upon window loading
runSpendWise();
