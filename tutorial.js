"use strict";
// //* Type anotations
// let id: number = 5;
// let company: string = "Random name";
// let isPublished: boolean = true;
;
const User = {
    id: 2,
    name: "Pedro",
    greet(message) {
        console.log(message);
    }
};
User.greet("Hello");
if (!User.age) {
    console.log("No age of the user!");
}
else {
    console.log(User.age);
}
