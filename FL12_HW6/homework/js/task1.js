// Your code goes here
'use strict';

let a = +prompt('Enter value for a', '0');
let b = +prompt('Enter value for b', '0');
let c = +prompt('Enter value for c', '0');

if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    console.log('Invalid input data');
} else {
    const D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        console.log('no solution');
    } else if (D === 0) {
        const x = -b / 2 * a;
        console.log('x = ' + x);
    } else if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log('x1 = ' + x1);
        console.log('x2 = ' + x2);
    }
}