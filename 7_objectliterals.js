/* Object literals are basically just key-value pairs

A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces
Object literals encapsulate data, enclosing it in a tidy package.
This minimizes the use of global variables which can cause problems when combining code.

It's the equivalent of dictionaries in Python

*/

const person = {
    firstName: 'Bret',  //Strings
    lastName: 'Vhinhart',
    age: 30,                //Integers
    hobbies: ['Videogames', 'Coding', 'Running', 'Reading', 'Guitar'],  //Array
    address: {                            //we can do embedded objects which are objects within an object
        street: '33rd Road',
        city: 'Astoria',
        state: 'NY'
    }
}

console.log(person);

// Use the 'dot' syntax to access a single value

console.log(person.address) //this will print only the address
console.log(person.firstName) //this will print only the first name, 'Bret'

// You can log more than one value

console.log(person.firstName, person.lastName) //just use a comma

//Quiz, get the value of 'Guitar'. Use what you've learned so far!

console.log(person.hobbies.indexOf('Guitar')); //this will print '4'

//Another example. Find out which state Bret lives in

console.log(person.address.state)

// If you want to create variables out of the 'person', we can do a Deconstructioning

const { firstName, lastName, address: {city}} = person; //this of this as NOT assigning something but PULLING things out

console.log(firstName) //now you can directly do a console log of this variables because it's deconstructed 
console.log(firstName, lastName)

//if it is an embedded object...

console.log(city)

//adding properties

person.email = 'bret@gmail.com'
console.log(person)

person.address.zipcode = '11106'
console.log(person)

