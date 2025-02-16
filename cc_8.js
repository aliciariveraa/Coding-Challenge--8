// Task 1 - Employee Salary Calculation

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

// Test Data
console.log(calculateSalary(5000, 500, 0.1)); // Net Salary: $5000.00
console.log(calculateSalary(7000, 1000, 0.15)); // Net Salary: $6950.00



// Task 2 - Product Price After Discount

const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
}

// Test Data
console.log(calculateDiscount(100, 0.2)); // Final Price: $80.00
console.log(calculateDiscount(250, 0.15)); // Final Price: $212.50



// Task 3 - Service Fee Calculation

const calculateServiceFee = (amount, serviceType) => {
    let feeRate;
    switch (serviceType) {
        case "Premium": feeRate = 0.15; break;
        case "Standard": feeRate = 0.10; break;
        case "Basic": feeRate = 0.05; break;
        default: feeRate = 0;
    }
    let serviceFee = amount * feeRate;
    return `Service Fee: $${serviceFee.toFixed(2)}`;
}

// Test Data
console.log(calculateServiceFee(200, "Premium")); // Service Fee: $30.00
console.log(calculateServiceFee(500, "Standard")); // Service Fee: $50.00



// Task 4 - Car Rental Cost Calculation

function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate;
    switch (carType) {
        case "Economy": dailyRate = 40; break;
        case "Standard": dailyRate = 60; break;
        case "Luxury": dailyRate = 100; break;
        default: dailyRate = 0;
    }
    let totalCost = days * dailyRate;
    if (insurance) totalCost += days * 20;
    return `Total Rental Cost: $${totalCost}`;
}

// Test Data
console.log(calculateRentalCost(3, "Economy", true)); // Total Rental Cost: $180
console.log(calculateRentalCost(5, "Luxury", false)); // Total Rental Cost: $500



// Task 5 - Loan Payment Calculation

function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}

// Test Data
console.log(calculateLoanPayment(1000, 0.05, 2)); // Total Payment: $1100.00
console.log(calculateLoanPayment(5000, 0.07, 3)); // Total Payment: $6050.00



// Task 6 - Identifying Large Transactions

let transactions = [200, 1500, 3200, 800, 2500];

function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Test Data
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // [1500, 3200, 2500]



// Task 7 - Shopping Cart Tracker
function createCartTracker() {
    let total = 0;
    return function(amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
}

// Test Data
let cart = createCartTracker();
console.log(cart(20)); // Total Cart Value: $20
console.log(cart(35)); // Total Cart Value: $55



// Task 8 - Savings Growth Projection

function calculateSavings(years, amount) {
    if (years === 0) return `Projected Savings: $${amount.toFixed(2)}`;
    amount += amount * 0.05;
    return calculateSavings(years - 1, amount);
}

// Test Data
console.log(calculateSavings(8, 1000)); // Projected Savings: $1102.50
console.log(calculateSavings(5, 5000)); // Projected Savings: $6381.41
