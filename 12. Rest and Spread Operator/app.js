// function addNumbers(...numbers) {
//     return numbers.reduce((sum, number) => sum + number, 0);
// }

// addNumbers(1,2,3,4,5,6,7,8);

// // ******************************Spread Operator *******************
// const defaultColors = ['red', 'green'];
// const userFavorites = ['orage', 'yellows'];
// const fallColors = ['fire red', 'fall orange'];

// [...fallColors ,...defaultColors, ... userFavorites]


// function validateShoppingList(...items) {
//     if (items.indexOf('milk') < 0) {
//         return ['milk', ...items];
//     }

// }

// validateShoppingList('oranges', 'bread', 'egg')

// ************** Practical use case**********************
const MathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
}