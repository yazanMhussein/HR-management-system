
class Employee{
    constructor(id,fullName,department,level,imageUrl){
        this.id=id;
        this.fullName=fullName;
        this.department=department;
        this.level=level;
        this.imageUrl=imageUrl;
        this.salary= this.calculateSalary();
    }


calculateSalary(){
    let minSalary, maxSalary;
    switch (this.level) {
        case 'Senior':
            minSalary = 1500;
            maxSalary = 2000;
            break;
        case 'Mid-Senior':
            minSalary = 1000;
            maxSalary = 1500;
            break;
        case 'Junior':
            minSalary = 500;
            maxSalary = 1000;
            break;
        default:
            minSalary = 0;
            maxSalary = 0;
    }
    let salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    let netSalary = salary - (salary * 0.075);
    return netSalary;
}
//
render() {
    const employeeCards = document.getElementById('employeeCards');
    const card = document.createElement('div');
    card.classList.add('employee-card');
    card.innerHTML = `
        <img src="${this.imageUrl}" alt="${this.fullName}">
        <div class="employee-info">
            <p><strong>ID:</strong> ${this.id}</p>
            <p><strong>Name:</strong> ${this.fullName}</p>
            <p><strong>Department:</strong> ${this.department}</p>
            <p><strong>Level:</strong> ${this.level}</p>
            <p><strong>Salary:</strong> $${this.salary.toFixed(2)}</p>
        </div>
    `;
    employeeCards.appendChild(card);
//
 }
}

function generateEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000);
}
function saveEmployees() {
    localStorage.setItem('employees', JSON.stringify(employees));
}
document.getElementById('addEmployeeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const department = document.getElementById('department').value;
    const level = document.getElementById('level').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const id = generateEmployeeId();
    const newEmployee = new Employee(id, fullName, department, level, imageUrl);
    newEmployee.render();
});


function renderEmployees() {
    let cardContainer = document.querySelector('.employee-cards');
    cardContainer.innerHTML = '';
    employees.forEach(employee => {
        cardContainer.innerHTML += employee.render();
    });
}

let employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg"),
    new Employee(1001, "Lana Ali", "Finance", "Senior", "assets/Lana.jpg"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg"),
    new Employee(1004, "Omar Zaid", "Development", "Senior", "assets/Omar.jpg"),
    new Employee(1005, "Rana Saleh", "Development", "Junior", "assets/Rana.jpg"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg")
];

for (const employee of employees) {
    employee.render();
}

let employeesData = JSON.parse(localStorage.getItem('employees')) || [];
    employees = employeesData.map(data => new Employee(data.id, data.fullName, data.department, data.level, data.imageUrl));
for (const employee of employees) {
    employee.render();
   
}


     