function fibs(number){

    // initialize array to store numbers
    fibArray = [];
    for(i = 0; i < number; i++){
        if(i < 2){

            // Set base Case
            fibArray.push(i);
        }
        else{
            // Add the two previous numbers in the array
            fibArray.push(fibArray[i-1] + fibArray[i-2])
        }
    }
    return fibArray;
}


function fibsRec(number){
    if(number === 1){

        // Set base case
        return [0, 1]
    }
    else if(number === 0){

        return [0]
    };

    // Recursively call function until base case is met
    let fibsArray = fibsRec(number - 1)

    // Add the two previous numbers in the array
    fibsArray[number-1]  = (fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2])
    return fibsArray
};
