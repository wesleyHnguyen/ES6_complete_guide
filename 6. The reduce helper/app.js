var numbers = [10, 20, 30, 40, 50];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

// ********************************
var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

primaryColors.reduce(function(prev, primaryColor) {
    prev.push(primaryColor.color);
    return prev;
}, []);

// *************************************************
function balancedParens(string) {
    return  !string.split("").reduce(function(prev, char){

        // Return prev(<0) if out of order
        if (prev < 0) return prev;

        if (char === '(') {
            return ++prev;
        }

        if (char === ')') {
            return --prev;
        }

        return prev;

    }, 0);
}

balancedParens('(())())');
