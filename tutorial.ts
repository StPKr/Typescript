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

//*Interfaces and types
interface UserInterface { //*usually done for objects
    id: number;
    name: string;
    age?: number;
    greet(mesage: string): void; //*define the function as type and what type to return, void since we're not returning anything
};

const User: UserInterface = {
    id: 2,
    name: "Pedro",
    greet(message) {
        console.log(message);
    }
};

User.greet("Hello");

if (!User.age) {
    console.log("No age of the user!");
} else {
    console.log(User.age);
}


