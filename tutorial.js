"use strict";
// //* Type anotations
// let id: number = 5;
// let company: string = "Random name";
// let isPublished: boolean = true;
const printId = (id) => {
    console.log(id);
};
printId("daig0329-0gasd");
printId(129129124012);
const signContract = (employee) => {
    console.log("Contract signed by " + employee.name + "with email: " + employee.email);
};
signContract({ name: "Pedro", id: 12192914, creditScore: 800, email: "pedro.nial@gmail.com" });
