const sumAll = function(a,b) {

    if (a<0 || b <0 || !Number.isInteger(a) || !Number.isInteger(b))
    {
        return 'ERROR';
    }
    let sum = 0;
    let start = Math.min(a, b); // Get the smaller number
    let end = Math.max(a, b);   // Get the larger number

    for (let i = start; i <= end; i++) {
        sum += i;
    }
            return sum;

};

// Do not edit below this line
module.exports = sumAll;
