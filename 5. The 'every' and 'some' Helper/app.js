var computers = [
    { name: 'Aplple', ram: 24},
    { name: 'Compag', ram: 4},
    { name: 'Accer', ram: 16},
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++) {

    var computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }

}

allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

computers.every(function(computer) {
    return computer.ram  > 16;
});


computers.some(function(computer) {
    return computer.ram > 16;
})

// *****************************
var names = [
    "Alexandria", "Matthew", "Joe"
];


names.every(function(name) {
    return name.length > 4;
});

names.some(function(name){
    return name.length > 4;
});
// ***********************************************
function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}


var username = new Field('2cool');
var password = new Field('my_password');
var birthdate = new Field('10/10/2010');

username.validate() && password.validate();


var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
    return field.validate();
})

if (formIsValid) {
    // allow user to submit
} else {
    // show an error message
}