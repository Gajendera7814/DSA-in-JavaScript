/*---------************ Rearrange array in alternating positive & negative **************-----------*/

/*
    Input: [1, 2, 3, -4, -1, 4]
    Output: [-4, 1, -1, 2, 3, 4]

    Input: [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
    Output: [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]
*/


//<<<<<<<<<<------------------ Using Sorting --------------------->>>>>>>>>>>>>//

const alternatePositiveNegative = (arr) => {
    arr.sort((a, b) => a - b);
    let negatives = arr.filter(num => num < 0);
    let positives = arr.filter(num => num >= 0);
    let result = [];

    for (let i = 0; i < negatives.length || i < positives.length; i++) {
        if (negatives[i] !== undefined) result.push(negatives[i]);
        if (positives[i] !== undefined) result.push(positives[i]);
    }

    return result;
};
let arr = [1, 2, 3, -4, -1, 4];
console.log(alternatePositiveNegative(arr)); // [ -4, 1, -1, 2, 3, 4 ]


//<<<<<<<<<<------------------ Using Two Pointers ----------------->>>>>>>>>>>>//

const arrangeAlternatePositiveNegative = (arr) => {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        while (arr[left] < 0 && left < right) left++;
        while (arr[right] >= 0 && left < right) right--;

        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    
    let pos = 0, neg = 0;
    while (neg < arr.length && arr[neg] < 0) neg++;
    while (pos < arr.length && arr[pos] >= 0) pos++;

    while (pos < arr.length && neg < arr.length) {
        let temp = arr[pos];
        arr[pos] = arr[neg];
        arr[neg] = temp;
        pos += 2;
        neg += 2;
        
        while (neg < arr.length && arr[neg] < 0) neg++;
        while (pos < arr.length && arr[pos] >= 0) pos++;
    }

    return arr;
};

let array = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
console.log(arrangeAlternatePositiveNegative(array));
// Output:- [2, -2, 7, -5,  4, 8,  1, 5,  0, -8]