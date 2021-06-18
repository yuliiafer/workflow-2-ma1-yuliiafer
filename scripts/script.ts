// 1

let someArray: ( number | boolean ) [] = [];

// 2

let tuple: [ boolean, string, number ] = [ true, "string1", 15 ];

// 3

function person (firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
    //return firstName + " " + lastName;
}

// 4

interface People {
    name: string;
    surname?: string;
    age?: number;
    jobTitle?: string;
}

// 5

enum Order {
    Paid,
    Unpaid,
    Unknown,
}

// 6

class Person1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayName() {
        return `My name is ${this.name}`;
    }
}

// 7

type strBool = string | boolean;

type numStr = number | string;

type Details = { id: numStr, status: strBool };

function typeAliases(name: strBool, details: Details) {}