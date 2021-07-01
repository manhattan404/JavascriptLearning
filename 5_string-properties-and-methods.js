const s = 'Hello World';

//lets get the number of characters in this string

console.log(s.length); //a property does not have a parenthesis, if does, its a method.

//this will print '11' because it has 11 characters (including space)

//lets turn this to all UPPERCASE

console.log(s.toUpperCase()); //notice the parenthesis because this is now a method 

//a METHOD is basically a function that is associated with an object

console.log(s.toLowerCase());

//Substring

console.log(s.substring(0, 5).toUpperCase()); //this will take 2 indexes which are the start and the end 
                                // this will print 'Hello' becaues 'H' is 0 and the space is 5
                                // notice that you can call two methods consecutively 

//Split a string into an array

console.log(s.split('')); //the parameter for the split is by letter, so put an empty quote

//this will print [         //Notice that it's inside a square bracket because it's an array. Equivalent of a list in Python
//  'H', 'e', 'l', 'l',     //The space is also part of the array
//  'o', ' ', 'W', 'o',
//  'r', 'l', 'd'
// ]

//Another example

const v = 'technology, computers, IT, code';

//lets say we want to take an array of each word
console.log(v.split(', ')); //we put the 'comma' and 'space' because that's what we want to separate it from

// This will print '[ 'technology', 'computers', 'IT', 'code' ]'