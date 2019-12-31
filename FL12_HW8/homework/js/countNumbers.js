function countNumbers(str) {
    let numbersString = makeNumber(str);
    let obj = {};
    for(let i = 0; i < numbersString.length; i++) {
        if (Object.prototype.hasOwnProperty.call(obj, numbersString[i])) {
            obj[numbersString[i]] += 1; 
        } else {
            obj[numbersString[i]] = 1;
        }
    }
    return obj;
}

function makeNumber(str) {
    let numbersString = '';
    for(let i = 0; i < str.length; i++) {
        if(0 <= +str[i] && +str[i] <= 9) {
            numbersString += str[i];    
        }    
    }
    return numbersString;
}