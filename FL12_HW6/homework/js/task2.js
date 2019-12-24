// Your code goes here
'use strict';

let a = +prompt('Enter triangle side a', '0');
let b = +prompt('Enter triangle side b', '0');
let c = +prompt('Enter triangle side c', '0');

if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    alert('input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c ===0) {
    alert('A triangle must have 3 sides with a positive definite length');
    console.log('Triangle doesn’t exist');
} else if (a + b < c || a + c < b || b + c < a) {
    alert('Triangle doesn’t exist');
} else if(a === b && b === c) {
    console.log('Equilateral triangle');
} else if(a === b || b === c || a === c) {
    console.log('Isosceles triangle');
} else if (a !== b && b !== c || a !== c) {
    console.log('Scalene triangle');
}