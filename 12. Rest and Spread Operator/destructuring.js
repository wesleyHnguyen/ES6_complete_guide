// var expense = {
//     type: 'Business',
//     amount: '$45 USD'
// };

// var type = expense.type;
// var amount = expense.amount;

// // ES6
// const { type, amount } = expense; // must be identical to the properties
// // const { amount } = expense;


var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

// function fileSummary(file) {

//     return `The file ${file.name}.${file.extension} is of size ${file.size}`;

// }

// function fileSummary({name, extension, size}) {

//     return `The file ${name}.${extension} is of size ${size}`;

// }

// fileSummary(savedFile);
// *******************************

const companies = [
    {name: 'Google', location: 'Mountain View'},
    {name: 'Facebook', location: 'Menlo Park'},
    {name: 'Uber', location: 'San Francisco'},
];

const [{location}] = companies;
// ****************************************
const Google = {
    locations: ['Mountain View', 'New York', 'London']
};

const {locations: [location]} = Google;

//******************************************************* */
// long arguments list
// instead pass a list of arguments -> pass a object instead 

// Now no longer to worry about the order of arguments
function signup({username, password, email, dateOfBirth, city}) {



}

const user = {
    username: 'alison',
    password: 'password',
    email: 'alison@gmail.com',
    dateOfBirth: '3/5/1982',
    city: 'New York'
};

// in diffent code base
signup(user);

// *************************************************************
//************************************************************ */
const points = [
    [4, 5],
    [10, 1],
    [0, 40],
];

// -->
// [
//     {x: 4, y: 5},
//     {x: 10, y: 1},
//     {x: 0, y: 40},
// ]

points.map(([ x, y ]) => { return { x ,y } })





