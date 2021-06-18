"use strict";
// 1
let someArray = [];
// 2
let tuple = [true, "string1", 15];
// 3
function person(firstName, lastName) {
    return `${firstName} ${lastName}`;
    //return firstName + " " + lastName;
}
// 5
var Order;
(function (Order) {
    Order[Order["Paid"] = 0] = "Paid";
    Order[Order["Unpaid"] = 1] = "Unpaid";
    Order[Order["Unknown"] = 2] = "Unknown";
})(Order || (Order = {}));
// 6
class Person1 {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        return `My name is ${this.name}`;
    }
}
function typeAliases(name, details) { }
