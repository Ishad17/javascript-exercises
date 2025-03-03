const repeatString = function(string,num) {

    if(num < 0){
        return 'ERROR';
    }
    else if( num == 0){
        return "";
    }


    let stringNew = string;

    for(let i = 1 ; i < num ; i++){  
        stringNew += string;
    }
    return stringNew;
};

repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
