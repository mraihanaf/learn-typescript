/*
Typescript allow developers to add types to javascript
 Javascript is a loosely typed language
*/
// Simple Types
/*
primitives in js and ts
    boolean -> true|false
    number
    string -> eg: "this is string"
    bigint
    symbol
*/
// Type assignment
// There are 2 main ways 
// Explicit type
var firstname = "Udin";
// Implicit type
// Typescript will guess the type
var age = 17;
console.log(firstname, age);
// Typescript will returns an error if the type isnt match
// age = "seventeen" 
