function mergeSort(unsortedArray){
    if(unsortedArray.length <= 1){
        // Set base case
        return unsortedArray;
    };
    // Set half of array and recursively call merge sort until base case is met
    let half = Math.floor(unsortedArray.length / 2);
    let leftSide = mergeSort(unsortedArray.slice(0, half));
    let rightSide = mergeSort(unsortedArray.slice(half));

    // Merge the two sorted arrays and return sorted array
    return merge(leftSide, rightSide)
};

function merge(leftSide, rightSide){

    // Initialize array
    let sortedArray = []

    // Merge the two arrays in order
    while(leftSide.length && rightSide.length){
        if(leftSide[0] < rightSide[0]){
            sortedArray.push(leftSide.shift())
            }
        else{
            sortedArray.push(rightSide.shift())
            }
        }

    // If left array isn't empty, add all the values onto the sorted array
    while(leftSide.length){
        sortedArray.push(leftSide.shift());
    };

    // If the right array isn't empty, add all values onto the sorted array
    while(rightSide.length){
        sortedArray.push(rightSide.shift());
    }

    // Return sorted array
    return sortedArray
};
