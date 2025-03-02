"use strict";
// //* Type anotations
// let id: number = 5;
// let company: string = "Random name";
// let isPublished: boolean = true;
const employee = {
    employeeId: 123,
    startDate: new Date(),
    name: "Pedro",
    department: "Finance",
};
employee.name = "Jessica";
employee.employeeId = 234;
console.log(employee);
