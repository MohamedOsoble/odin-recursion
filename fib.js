function fibs(number){
    fibArray = [];
    for(i = 0; i < number; i++){
        if(i < 2){
            fibArray.push(i);
        }
        else{
            fibArray.push(fibArray[i-1] + fibArray[i-2])
        }
    }
    return fibArray;
}

// console.log(fibs(5));
// console.log(fibs(8));
// console.log(fibs(10));


function fibsRec(number){
    if(number === 1){
        return [0, 1]
    }
    else if(number === 0){
        return [0]
    }

    let fibsArray = fibsRec(number - 1)
    fibsArray[number-1]  = (fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2])
    return fibsArray
};

console.log(fibsRec(0));
