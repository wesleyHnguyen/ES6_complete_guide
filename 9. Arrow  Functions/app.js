// const add = function(a, b) {
//     return a + b;
// }

const add = (a, b) => a + b;

add(1, 2);

// ********************************
const double = (number) => 2 * number;

// *******************************************
const numbers = [1, 2, 3];

numbers.map(number => 2 * number);

// *****************************************
// const team = {
//     members: ['Jane', 'Bill'],
//     teamName: 'Super Squad',
//     teamSummary: function() {
//         return this.members.map(function(member) {
//             return `${member} is on team ${this.teamName}`;
//         }.bind(this));
//     }
// };

// team.teamSummary();


const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: () => {
        return this.members.map((member)=> {
            return `${member} is on team ${this.teamName}`;
        });
    }
};

team.teamSummary();