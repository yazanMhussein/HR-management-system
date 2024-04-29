'use strict';

let departments = [];


let employeesKey = 'employees';


class Department {
    constructor(name) {
        this.name = name;
        this.numberOfEmployees = 1;
        this.totalSalaries = 0;
        this.averageSalary;
        departments.push(this);
        console.log(departments)
    }

    addSalary(value) {
        this.totalSalaries += value;
        this.averageSalary = Math.round(this.totalSalaries / this.numberOfEmployees);
    }

    addEmployee() {
        this.numberOfEmployees++;
    }
}

//get employees data.
//update departments list.

let employees = JSON.parse(localStorage.getItem(employeesKey));
employees.forEach(emp => {
    if (!departments.map(dep => dep.name).includes(emp.department)) {
        let newDepartment = new Department(emp.department);
        newDepartment.addSalary(emp.salary);
    } else {
        let department = departments.find(dep => dep.name == emp.department);
        department.addEmployee();
        department.addSalary(emp.salary);
    }
});

let table = document.createElement("table");

let thead = document.createElement("thead");

thead.innerHTML =
    `
    <tr>
        <th>Department Name</th>
        <th>Number Of Employees</th>
        <th>Average Salary</th>
        <th>Total Salary</th>
    </tr>
`;
table.appendChild(thead);

let tbody = document.createElement("tbody");

let departmentsSalaries = 0;
let departmentsAverageSalaries = 0;

departments.forEach(department => {
    tbody.innerHTML +=
        `
    <tr>
        <td>${department.name}</td>
        <td>${department.numberOfEmployees}</td>
        <td>${department.averageSalary}</td>
        <td>${department.totalSalaries}</td>
    </tr>
`;
    departmentsSalaries += department.totalSalaries;
    departmentsAverageSalaries+= department.averageSalary;
});
table.appendChild(tbody);

let tfoot = document.createElement("tfoot");
tfoot.innerHTML = 
`
    <tr>
        <th>Total:</th>
        <th>${employees.length}</th>
        <th>${departmentsAverageSalaries}</th>
        <th>${departmentsSalaries}</th>
    </tr>
`;

table.appendChild(tfoot);

document.getElementsByTagName("main")[0].appendChild(table);
