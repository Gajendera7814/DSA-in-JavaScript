/*----------********** Sorting algorithms in JavaScript to sort an array in ascending order ***********----------*/

/*
    Input: [0, 23, 14, 12, 9]  Output: [0, 9, 12, 14, 23]

    Input: [0, 5, 2 , -1, 6, 9]  Output: [-1, 0, 2, 5, 6, 9]
*/


//<<<<<<<<<<---------------------- Bubble Sort --------------------->>>>>>>>>>//

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(bubbleSort([0, 23, 14, 12, 9])); // [ 0, 9, 12, 14, 23 ]


//<<<<<<<<<<---------------------- Selection Sort ------------------->>>>>>>>>>//

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
};
console.log(selectionSort([0, 5, 2 , -1, 6, 9]));

