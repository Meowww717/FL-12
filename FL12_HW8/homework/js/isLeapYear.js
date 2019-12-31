function isLeapYear(fullDate) {
    let date = new Date(fullDate);

    if(isNaN(date.getFullYear())) {
        console.log('Invalid Date');
    } else if (date.getFullYear() % 4 === 0) {
        console.log(`${date.getFullYear()} is a leap year`);
    } else {
        console.log(`${date.getFullYear()} is not a leap year`);
    }
}