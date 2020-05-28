let EmployeeSalaries = {
    salary1: 12000,
    salary2: 3478,
    salary3: 10874,
    salary4: 10834
};
console.log(EmployeeSalaries);
let sum = 0;
for (let salaryNumber in EmployeeSalaries) {
    sum +=EmployeeSalaries[salaryNumber]
}
console.log(sum);
