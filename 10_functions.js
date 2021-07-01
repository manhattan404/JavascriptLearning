// +++++ FUNCTIONS +++++

function addNUMs(num1, num2) {
    console.log(num1 + num2)     //this is where you tell what will happen
}

addNUMs(5,4);

//if you don't pass parameter, it will print "NaN" which means "Not a number"

//We can also set default parameters to functions. For example

function addMoreNum(morenum1 = 1, morenum2 = 1) {
    console.log(morenum1 + morenum2);
}

addMoreNum(); //this will add the default parameters

//if you pass parameters, it will override the default values

addMoreNum(5,5);

//For the most part, you're not going to console.log a function, you are actually going to RETURN it.

function RturnNum(rnum1, rnum2) {
    return rnum1 + rnum2;
}

console.log(RturnNum(5,6)); //You're going to wrap the function in console.log

// Arroe functions - clean things up a bit
// instead of using fucntion, we would use const and make a variable

const arrowNum = (arrowNum1 = 1, arrowNum2 = 1) => { //put the "fat arrow"
    return arrowNum1 + arrowNum2;
}

console.log(arrowNum(8,8));

//if you want to return something, you don't have to put return

const rarrowNum = (rarrowNum1 = 1, rarrowNum2 = 1) => rarrowNum1 + rarrowNum2; // RETURN is not needed
console.log(rarrowNum(11,9)); // you can place it inside a parenthesis but it's not mandatory

// If you only have one parameter for the function, you don't need a parenthesis 

const noParNum = noPar1 => noPar1 + 5;

console.log(noParNum(24)); // you can pass just one value

// You can use this for FOREACH methods

todos.forEach((todo) => console.log(todo)); // this is just an example



