function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    // lets make a function that get's the full name
    /*this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;*/ // Commented out for demo purposes. Transferred to line 13.    
}

// You can turn a function to a prototype so it's doesnt appear on console.log when you don't need it 

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Jane', '3-4-1972')


console.log(person1.getFullName());
console.log(person2);

// CLASSES do the same things under the hood but it's syntaxic sugar (It's prettier)
// Classes on next topic