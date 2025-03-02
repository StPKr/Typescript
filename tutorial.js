"use strict";
// //* Type anotations
// let id: number = 5;
// let company: string = "Random name";
// let isPublished: boolean = true;
// let ids: number[] = [1, 2, 3, 4, 5];
// let x: any = "test";
// let xArr: any[] = ["pedro", 0, true];
// const concatenateValues = (a: string, b: string): string /*type after brackets defines return statement type*/ => {
//     return a + b;
// }
// console.log(concatenateValues("Hello", "Wordl"));
// console.log(concatenateValues(5, 10));
// //*Interfaces and types
// interface UserInterface { //*usually done for objects
//     id: number;
//     name: string;
//     age?: number;
//     greet(mesage: string): void; //*define the function as type and what type to return, void since we're not returning anything
// };
// const User: UserInterface = {
//     id: 2,
//     name: "Pedro",
//     greet(message) {
//         console.log(message);
//     }
// };
// User.greet("Hello");
// if (!User.age) {
//     console.log("No age of the user!");
// } else {
//     console.log(User.age);
// }
// //*Intersections and unions
// type IDFieldType = string | number; //*usually done for objects
// const printId = (id: IDFieldType): void => {
//     console.log(id);
// }
// printId("daig0329-0gasd");
// printId(129129124012);
// interface BusinesSPartner {
//     name: string;
//     creditScore: number;
// }
// interface UserIdentity {
//     id: number;
//     email: string;
// }
// type Employee = BusinesSPartner & UserIdentity; //* with | operator it's OR with & it's AND, this way it has both attributes
// const signContract = (employee: Employee): void => {
//     console.log("Contract signed by " + employee.name + "with email: " + employee.email);
// }
// signContract({ name: "Pedro", id: 12192914, creditScore: 800, email: "pedro.nial@gmail.com" });
//*Enums
//unauthorized, user doesn't exist, wrong credentials, internal
var LoginError;
(function (LoginError) {
    LoginError["Unathorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
const printErrorMsg = (error) => {
    if (error = LoginError.Unathorized) {
        console.log("User not authorized");
    }
    else if (error = LoginError.NoUser) {
        console.log("No user was found with this username");
    }
    else if (error = LoginError.WrongCredentials) {
        console.log("Wrong credentials were used");
    }
    else if (error = LoginError.NoUser) {
        console.log("Internal error");
    }
};
printErrorMsg(LoginError.Internal);
