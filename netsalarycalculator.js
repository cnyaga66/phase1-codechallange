//Net salary calculator
function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const taxRate = 0.1; // 10%
    const nhifRate = 0.15; // 15%
    const nssfRate = 0.12; // 12%

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate deductions
    const tax = grossSalary * taxRate;
    const nhifDeductions = grossSalary * nhifRate;
    const nssfDeductions = grossSalary * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Return an object containing all calculated values
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

// Example usage
const basicSalary = 70000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary: " + salaryDetails.grossSalary);
console.log("Tax: " + salaryDetails.tax);
console.log("NHIF Deductions: " + salaryDetails.nhifDeductions);
console.log("NSSF Deductions: " + salaryDetails.nssfDeductions);
console.log("Net Salary: " + salaryDetails.netSalary);
