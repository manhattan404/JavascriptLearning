// CONDITIONALS

//if statement

const x = 10

if( x == 10 ) {
    console.log('x is 10');
}

// If we use double equal, this will not match the data type, its just the value
// So we change the value of 10 into a string   const x = '10'
// the if statement is still true 

// if you use a triple equal sign, you're not going to get a result because it also matches the data type
// 20 is a string and the 20 in the conditional is a number
// If you want to show a result, you must match the data types. Which means a string for a string

const y = '20'

if ( y === 20 ) {
    console.log('Will this show a result? Probably not')
}

// adding an 'else'

const z = 'Orange'

if ( z === 'Apple' ) {
    console.log('This is an apple'); 
}   else {
    console.log('This is not an apple')
}

// elseif
// you can add as many elseif as you want

const myNumber = 9

if ( myNumber === 15) {
    console.log("This is exactly 15");
} else if ( myNumber > 15) {
    console.log("Your number is greater than 15!");
} else { ( myNumber < 15) 
    console.log("Your number is less than 15");
}

// Doing multiple conditionals

const xValue = 5;
const yValue = 20;

//checking IF one of these are true
// The double pipe means 'Or'

if ( xValue > 5 || yValue === 20 ) {
    console.log("You guessed one of the numbers!")
} else {
    console.log("Neither of the values hit the mark :( ")
}

// checking if BOTH of the statements are true
// two && means "and"

if ( xValue === 5 && yValue === 20)  {
    console.log('Congratulations! You won the lottery!')
} else {
    console.log("Numbers have to be both exact!")
}

//
//                                     TERNARY OPERATOR
//                          - it's like a shorthand if statement

const anotherX = 11;

// ? means 'then'. This is the ternary operator
// 'else' is represented by the colon
const color = anotherX > 10 ? 'red' : 'blue'; 

//"If another X is greater than 10, then it's read. Else it's blue"

console.log(color); //you will get blue because 'anotherX' is not greater than 10 