function mergeSort(unsortedArray){
    if(unsortedArray.length <= 1){
        return unsortedArray;
    };
    let half = Math.floor(unsortedArray.length / 2);
    let leftSide = mergeSort(unsortedArray.slice(0, half));
    let rightSide = mergeSort(unsortedArray.slice(half));

    return merge(leftSide, rightSide)
};

function merge(leftSide, rightSide){
    let sortedArray = []

    while(leftSide.length && rightSide.length){
        if(leftSide[0] < rightSide[0]){
            sortedArray.push(leftSide.shift())
            }
        else{
            sortedArray.push(rightSide.shift())
            }
        }

    while(leftSide.length){
        sortedArray.push(leftSide.shift());
    };
    while(rightSide.length){
        sortedArray.push(rightSide.shift());
    }
    return sortedArray
};

console.log(mergeSort([27,15,23,12,0,8,19]));
