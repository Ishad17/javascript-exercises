const repeatString = function(string,num) {

    if (num<0){
        return 'ERROR';
    }
    let word = '';

    for (i=0; i<num; i++){
        word = word + string;
    }
    return word;
};

repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
