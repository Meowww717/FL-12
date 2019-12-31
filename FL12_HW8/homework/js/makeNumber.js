function makeNumber(str) {
    let numbersString = '';
    for(let i = 0; i < str.length; i++) {
        if(0 <= +str[i] && +str[i] <= 9) {
            numbersString += str[i];    
        }    
    }
    return numbersString;
}
