//* Type anotations
let id: number = 5;
let company: string = "Random name";
let isPublished: boolean = true;

let ids: number[] = [1, 2, 3, 4, 5];
let x: any = "test";
let xArr: any[] = ["pedro", 0, true];


const concatenateValues = (a: string, b: string): string /*type after brackets defines return statement type*/ => {
    return a + b;
}

console.log(concatenateValues("Hello", "Wordl"));
console.log(concatenateValues(5, 10));


