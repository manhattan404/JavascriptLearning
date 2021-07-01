//STRINGS

const name = 'Bret Vhinhart';
const age = 30;

//Concatenation

console.log('My name is ' + name + ' and I am ' + age + ' years old.'); //old way of doing it

//new way of doing it

//Template String or Template literals 

console.log(`My name is ${name} and I am ${age} years old.`) //instead of quotes, backticks are used followed by ${}

//we can also assigned this to a variable

const hello = `My name is ${name} and I am ${age} years old.`; //notice that the parenthesis are removed

console.log(hello);