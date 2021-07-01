// CLASSES 

// constructor / method = a function inside a class 
// Classes are more preferred to make because more people are familiar with it and it's used in more languages. 

class Person {
    constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = dob;           
        }
        getBirthYear() {
            return this.dob.getFullYear();
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }

// Instantiate Object

const person1 = new Person('Bret', 'Hart', '6-4-1994');
const person2 = new Person('Rose','Casdel', '10-9-2001')

console.log(person1);
console.log(person2.getFullName());