function isSmaller(num1, num2) {
    if(num1 === num2) {
        return false;
    } else {
        return !isBigger(num1, num2);
    }
}

function isBigger(num1, num2) {
    return num1 > num2;
}