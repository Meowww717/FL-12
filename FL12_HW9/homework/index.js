// Your code goes here
'use strict'

//task 1
function convert(... args) {
    const result = args;
    for (let i = 0; i <= result.length - 1; i++) {
        if ( typeof result[i] === 'string' ) {
            let value = result[i];
            result[i] = parseInt(value);        
        } else if ( typeof result[i] === 'number' ) {
            let value = result[i];
            result[i] = '' + value;
        }
    }
    return result;
}

//task 2
function executeforEach(arr, callback) {
    for (let i = 0; i <= arr.length - 1; i++) {
        callback(arr[i]);
    }   
}

//task 3
function mapArray(arr, checkArray) {
    executeforEach(arr, checkArray); 
}

function checkArray(el) {
    if (typeof el === 'string') {
        el = parseInt(el);    
    }          
    return el;
}

//task 4 ? 
function filterArray(arr, check) {
    executeforEach(arr, check); 
}

function check(el) {
    if (el % 2 === 0) {
        return el; 
    }           
}

//task 5
function flipOver(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

//task 6
function makeListFromRange(arr) {
    let start = arr[0];
    let end = arr[1];

    arr.pop();

    while (start !== end) {
        start += 1;
        arr.push(start);
    }

    return arr;
}

//task 7

