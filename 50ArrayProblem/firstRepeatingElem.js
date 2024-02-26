/*----------************ Find the first repeating element in an array of integers **************----------*/

/*
    Input: arr = [10, 5, 3, 4, 3, 5, 6]
    Output: 5

    Explanation: 5 is the first element that repeats

    Input: arr = [6, 10, 5, 4, 9, 120, 4, 6, 10]
    Output: 6

    Explanation: 6 is the first element that repeats
*/


//<<<<<<<<<<<------------------ Using Nested Loops ------------------>>>>>>>>>>>>>//

const firstRepeatingElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return -1; // If no repeating element found
};
const arr = [10, 5, 3, 4, 3, 5, 6];
console.log("First repeating element:", firstRepeatingElement(arr));


//<<<<<<<<<<<<<<-------------------- Using Set -------------------->>>>>>>>>>>>>>>//

const firstRepeatingElementUsingSet = (arr) => {
    let min = -1;
    let set = new Set();

    for (let i = arr.length - 1; i >= 0; i--) {
        if (set.has(arr[i])) {
            min = i;
        } else {
            set.add(arr[i]);
        }
    }
    if (min !== -1) {
        return arr[min]; // return the first repeating element
    }
    return min; // If no repeating element found
};
const array3 = [6, 10, 5, 4, 9, 120, 4, 6, 10];
console.log("First repeating element:", firstRepeatingElementUsingSet(array3));




