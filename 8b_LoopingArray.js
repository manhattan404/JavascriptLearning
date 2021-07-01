// Lets take the todo example

const todos = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
]

// Now lets loop through it 
// This is an old way of doing it

// We can use a For loop. We can just change the 2nd parameter which is the 'condition'

// " As long as 'i' is less than the length of items in 'todos' array (which is 3) "
// Remember that we can use .length in a string but we can also use it in an array
// This means it's going to loop through as many todos as there are

for(let i = 0; i < todos.length; i++) {

    //now we want to print/log out the todo text
    //The index will be the 'i' value
    console.log(todos[i].text);
    //this will only print the value of the key 'text'
}

// The easier way to do it is...

//'todos' is the name of the array above
//'todo' could be named anything. Pick something that makes sense

for(let todo of todos) {
    console.log(todo);
    console.log(todo.id);
}

//
//              ++++ HIGH ORDER ARRAY METHOD - Suggested Method ++++
//

// forEach - kinda just loops through them
// map - allow to create a new array from an array
// filter - create a new array based on a condition
 
// forEach

//"These High Order Array Methods, they take in as parameter of function", so we pass in a fucntion like this, and this callback function 
// can take in a parameters, but the first parameter is the variable that you're going to want to use which will be 'todo' as each item

todos.forEach(function(todo) {
    console.log(todo.text);
})

//
//                     ++++     MAP    ++++
//

// with 'map' it returns an array, so we're going to assign a variable
// Because want we want to do is to loop through the array and return the text key-value


const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText); //this will return an array of the 'todos'

//
//                     ++++   FILTER   ++++
//
// Lets say we only want to return the value that are 'true'

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
})

console.log(todoCompleted); //this will give you a value of the completed todos

// Let's say we just want to map and just get the 'text' of the values which are  'true'

const todoCompletedText = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompletedText); //this will print the text of the values that are true

// Watch Traversy Media's video on 'High Order Array Methods'


