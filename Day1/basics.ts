let userName = "jack"
let hasLoggedIn = true;

userName += " Harrington"

console.log(hasLoggedIn);

// Number Data Type
let myNumber: number = 10;

// Regular Expression Data Type
let myRegex: RegExp = /fool/;

// Array Declaration/Data type 
const names: string[] = userName.split(" ")
const myValues: Array<number> = [1,2,3];


// Interface Declaration/Syntax
interface Person{
    first: string,
    last: string;
    // cool: boolean;
}

const myPerson: Person = {
first: "Quadri",
last: "Abdul"
} 


//  Utility type or Record type with conditional statements
const ids: Record<number,string> ={
    10: "a",
    20: "b"
};
ids[30] = "c"


if(ids[30] === "D"){}

for (let i = 0; i < 10; i++) {
    console.log(i);
    
    
}

[1,2,3].forEach((v) => console.log(v));

const out:number[] = [4,5,6].map((v) => v * 10)


// ///////////////////////////////////

// Episode 1 ends

// //////////////////



