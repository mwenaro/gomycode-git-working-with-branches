//Create a function that squares every digit of a number.

function squareNumbers(num) { 
    const Numbers = String(num).split('');

    const squaredNumbers = Numbers.map(digit => { 
        return Math.pow(parseInt(Number, 10), 2);
    }).join('');

    return parseInt(squareNumbers, 10);
}

// another method
const squaredNumbers = num => +String(num).split().map(d => (+d)**2).join('');

//output
console.log(squareNumbers(12));  //output:14
