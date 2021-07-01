// var, let, const
// var is globaly scoped
// dont use var anymore

//let = you can reassign value. Example

let age = 30;

console.log(age); //this will print age which is 30

age = 31; //we just changed the age

//let do constant

const age = 30; 

console.log(age) // this will print the age which is 30

//if we try to change age in const, it will not work

age = 31
console.log(age) //this will give an error because we cannot change const

//we do we use let and const
// always use const unless youre going to reassign the value
//for example, we are using a scoring system

let score; 

score = 10;

console.log(score) //this will print the score

//you can do this with const
