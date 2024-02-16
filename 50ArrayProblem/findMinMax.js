/*<<<<<<<<--------- Program to find the minimum (or maximum) element of an array ----------->>>>>>>>*/

/*
    Input: [1, 423, 6, 46, 34, 23, 13, 53, 4]    Output---->>>> { min: 1, max: 423 }

    Input: [ 12, 1234, 45, 67, 1 ]    Output---->>>> { min: 1, max: 1234 }
*/

// Approach - 1  Using a loop to iterate through the array

const findMinMaxUsingLoop = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
};
console.log(findMinMaxUsingLoop([1, 3, 5, 2, 4])); // Output: { min: 1, max: 5 }


// Approach - 2  Using Array.prototype.reduce() method

const findMinMaxUsingReduce = (arr) => {
    return arr.reduce((acc, curr) => {
        if (curr < acc.min) {
            acc.min = curr;
        }
        if (curr > acc.max) {
            acc.max = curr;
        }
        return acc;
    }, { min: arr[0], max: arr[0] });
};
console.log(findMinMaxUsingReduce([1, 423, 6, 46, 34, 23, 13, 53, 4])); // Output: { min: 1, max: 423 }
