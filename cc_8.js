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