function addOne(x) {
    return x + 1;
}

function pipe(num, ... functions) {
    let sum = num;

    for (let func of functions) {
        sum = func(sum);
    }

    return sum;
}
  