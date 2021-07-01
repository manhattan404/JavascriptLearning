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

console.log(todos)

//Task: print 'Metting with boss' in the console

console.log(todos[1].text); //since we want the text in the second value of the array, we put '1'

/* Lets say we want to send a JSON file to a server within out script*/

//create a new variable

const todoJSON = JSON.stringify(todos); //this will convert the array to JSON format
console.log(todoJSON);