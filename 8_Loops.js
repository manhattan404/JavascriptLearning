// FOR Loops  

// There's going to be three parameters
// First parameter is the assignment of the itirator or variable 
// let i = 0
//..then use a semicolon to separate
// Second parameter is the condition that needs to be met
// i < 10      "i is less than 10"
// Third parameter is the increment
// i++

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

//this will stop at 100
//You can rename the variable 'i' to anything

//You can also put a template string...

for(let i = 0; i <= 10; i++) {
    console.log(`For loop number: ${i}`);
}

// WHILE Loop

//the difference with While loop is we set the varaible outside of the loop
let i = 0;
while(i < 10) { //takes in the same condition
    console.log(`WHILE loop number: ${i}`);
    i++; // make sure that you increment the 'i' because if you don't it will be a never ending loop
}