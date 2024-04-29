'use strict';
//this is constructor it's a blueprint for your employees. we us this with our prototype to create a new employees 
let employees = [];
let employeesKey = 'employees';
class Employee {
    constructor(fullName, department, level, imageUrl) {
        this.id = generateEmployeeId();
        this.fullName = fullName;
        this.department = department;
        this.level = level;
        this.imageUrl = imageUrl;
        this.salary = this.calculateSalary();
        employees.push(this);
    }
    
}
//new calculateSalary that is random
Employee.prototype.calculateSalary = function () {
    function generateRandomSalary(minSalary, maxSalary) {
        return Number.parseInt(Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary);
    }
// we are doing a test to see what level is the employees in
    switch (this.level) {
        case 'Senior':
            return generateRandomSalary(1500, 2000);
        case 'Mid-Senior':
            return generateRandomSalary(1000, 1500);
        case 'Junior':
            return generateRandomSalary(500, 1000);
    }
}
////here I'M create the card for the empolyee
  function render(employee) {
    const employeeCards = document.getElementById('employeeCards');
    const card = document.createElement('div');
    card.classList.add('employee-card');
    card.innerHTML = `
    <img src="${employee.imageUrl}" alt="${employee.fullName}">
    <div class="employee-info">
        <p><strong>ID:</strong> ${employee.id}</p>
        <p><strong>Name:</strong> ${employee.fullName}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Level:</strong> ${employee.level}</p>
        <p><strong>Salary:</strong> ${employee.salary}</p>
    </div>
`;
    employeeCards.appendChild(card);
}
// this is the employee id for the 4 digits
function generateEmployeeId() {
    return 1000 + employees.length;
}
//this is where the form take the input that we put inside of it and add to the html body
document.getElementById('addEmployeeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const department = document.getElementById('department').value;
    const level = document.getElementById('level').value;
    const imageUrl = document.getElementById('imageUrl').value;
    let emp = new Employee(fullName, department, level, imageUrl);
    saveEmployees()
    console.log("what is this doing ",saveEmployees())
    render(emp);
});


// here is all of your employees data that save in .js code
    new Employee( "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg"),
    new Employee( "Lana Ali", "Finance", "Senior", "assets/Lana.jpg"),
    new Employee( "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg"),
    new Employee( "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg"),
    new Employee( "Omar Zaid", "Development", "Senior", "assets/Omar.jpg"),
    new Employee( "Rana Saleh", "Development", "Junior", "assets/Rana.jpg"),
    new Employee( "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg")

//this loop thougthout the employees list of data then puts it in the html body
function renderData() {
    employees = getDataFromLocalStorage();
    employees.forEach(employee => {
        render(employee);
    });
        
}
// we are get the employee information
function getDataFromLocalStorage() {
    return  JSON.parse(localStorage.getItem(employeesKey));
}
// we are save the employees information that we got form local storage
function saveEmployees() {
    localStorage.setItem(employeesKey, JSON.stringify(employees));
}

//To ensure that the hard coded data is always in the local storage,
// even if I deleted the data from local storage, 
//so when I refresh the page the data will be stroed in the local storage again
function fillLocalStorageIfEmpty() {
    if (getDataFromLocalStorage() == null) {
        saveEmployees();
    }
}
fillLocalStorageIfEmpty();
renderData();




