// Double backslash for single line comments

/* multi
line 
comment */


// ARRAYS - variables that hold multiple values

// ARRAY METHODS   

//This is the old way of doing arrays

const numbers = new Array(1,2,3,4,5); //when you see a 'new' keyword and something after it, it means it's a new constructor

console.log(numbers);

//This is the new way of doing arrays

const fruits = ['apples', 'mangoes', 'oranges'];

console.log(fruits);

//you can also add different data types in an array such as integers and booleans

const sample = ['keyboard', 'mouse', 10, true];

console.log(sample)

//What if we want to access one item in an array?

console.log(sample[2]); //put the place of the item in the parameter inside a square bracket
                        // This will print '10'

// What if you what to appent to an array?

sample[4] = 'charger'; /* take the name of the variable and put in the next number to append. 
                        Not exactly the best method since you might not know the position of the item
                        */

console.log(sample)

/* Remember that you can add values to an array using  'const'. 
The only thing you can't do is take the array and reassign it like this 

fruits = []:

*/

//An easier way to append to the END is to use the "push method"

fruits.push('papaya'); //this will add 'papaya' in the array of fruits 

console.log(fruits);

//What if you want to add in the beginning of an array? Use "unshift"

fruits.unshift('Watermelon');
console.log(fruits); //this will add 'Watermelon' in the beginning

//What if you want to remove the last one in an array. You can use "Pop"

fruits.pop();
console.log(fruits);

//Check to see if there is something in the array

console.log(Array.isArray(fruits)) //this will print 'True' because there is soemthing in the array

console.log(Array.isArray('hello')) //this will return false because there's no 'hello' in the array

//Check the index of a certain value

console.log(fruits.indexOf('mangoes')) //This will print '2' because we've also added a 'watermelon' in the beginning

// There's TONS of other Array methods