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

render(){
    console.log(`${this.fullName}: $${this.salary.toFixed(2)}`);
    // Add row to the HTML table
    const tableBody = document.querySelector('tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${this.id}</td>
        <td>${this.fullName}</td>
        <td>${this.department}</td>
        <td>${this.level}</td>
        <td>$${this.salary.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
}
}
let employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://example.com/image1.jpg"),
    new Employee(1001, "Lana Ali", "Finance", "Senior", "https://example.com/image2.jpg"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://example.com/image3.jpg"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://example.com/image4.jpg"),
    new Employee(1004, "Omar Zaid", "Development", "Senior", "https://example.com/image5.jpg"),
    new Employee(1005, "Rana Saleh", "Development", "Junior", "https://example.com/image6.jpg"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://example.com/image7.jpg")
];

for (const employee of employees) {
    employee.render();
}
