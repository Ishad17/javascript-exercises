const removeFromArray = function(arr,...elem) {

    
        for(i = 0; i < elem.length; i++)
            {

                let index = arr.indexOf(elem[i])
                if( index != -1){

                    do{
                        console.log(index)
                        arr.splice(index,1);
                        index = arr.indexOf(elem[i])
                    }
                     while(index != -1)
                }


            }

        return arr;    
};

// Do not edit below this line
module.exports = removeFromArray;



