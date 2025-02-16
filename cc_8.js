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