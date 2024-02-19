/*------------************ Count number of occurrences (or frequency) in a sorted array ***********-------------*/

/*
    Input: [1, 1, 2, 2, 2, 2, 3]   x = 2
    Output: 4 
    Explaination:  x (or 2) occurs 4 times

    Input: [1, 1, 2, 2, 2, 2, 3]   x = 3
    Output: 1 

    Input: [1, 1, 2, 2, 2, 2, 3]   x = 1
    Output: 2 

    Input: [1, 1, 2, 2, 2, 2, 3]  x = 4
    Output: -1
    Explaination: 4 doesn't occur
*/

//<<<<<<<<<<-------------------------- Using Linear Search --------------------------->>>>>>>>>>//

const countOccurrencesLinear = (arr, x) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            count++;
        }
    }
    return count;
};
console.log(countOccurrencesLinear([1, 1, 2, 2, 2, 2, 3], 2)); // Output: 4


//<<<<<<<<<<-------------------------- Using Binary Search --------------------------->>>>>>>>>>//

const firstOccurrence = (arr, x) => {
    let low = 0,
    high = arr.length - 1,
    result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            result = mid;
            high = mid - 1;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
};

const lastOccurrence = (arr, x) => {
    let low = 0,
    high = arr.length - 1,
    result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            result = mid;
            low = mid + 1;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
};

const countOccurrencesBinary = (arr, x) => {
    const firstIndex = firstOccurrence(arr, x);
    const lastIndex = lastOccurrence(arr, x);
    if (firstIndex === -1) {
        return 0;
    }
    return lastIndex - firstIndex + 1;
};
console.log(countOccurrencesBinary([1, 1, 2, 2, 2, 2, 3], 3)); // Output: 1

