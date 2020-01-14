// Your code goes here
'use strict'

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

function executeforEach(arr, callback) {
    for (let i = 0; i <= arr.length - 1; i++) {
        callback(arr[i]);
    }   
}
