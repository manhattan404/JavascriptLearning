// Constructor function

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    // lets make a function that get's the full name
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }

}

// Instantiate object

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Jane', '3-4-1972')

console.log(person1); // getting all parameters
console.log(person2.lastName); // getting just one parameter

// You can also make a dat object

function thisIsaDate(dob) {
    this.dob = new Date(dob); 
    this.getBirthYear = function(){ // you can make a function out of an object 
        return this.dob.getFullYear(); //return 
    }
}

const datePerson1 = new thisIsaDate('6-4-1994');

console.log(datePerson1.dob.getFullYear()); // this will print 1994
console.log(datePerson1.getBirthYear()); // this will also print 1994

console.log(person1.getFullName()); // This is the function that you just created in line 8

// Not exactly the best way because you will see the functions created when you console.log



