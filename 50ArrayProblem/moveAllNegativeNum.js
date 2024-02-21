/*------------************* Move all negative numbers to beginning and positive to end ************/

/*
    Note: Order of elements is not important here.

    Input: [-12, 11, -13, -5, 6, -7, 5, -3, -6] ----->>>>> Output: [-12, -13, -5, -7, -3, -6, 11, 6, 5]

    Input: [-1, 2, -3, 4, 5, 6, -7, 8, 9] ----->>>>> Output: [-1, -3, -7, 4, 5, 6, 2, 8, 9]
*/


/* Sorting approach (not in-place, O(n log n) time, O(1) space) */

const moveNegativeUsingSort = (arr) => {
    arr.sort((a, b) => (a < 0 ? -1 : 1));
    return arr;
};
console.log(moveNegativeUsingSort([-1, 3, 2, -4, 6, -5])); // Output: [ -5, -4, -1, 3, 2, 6 ]


/* Two-pointer approach (in-place, O(n) time, O(1) space) */

const moveNegativeUsingTwoPointer = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] < 0) {
            left++;
        } else if (arr[right] >= 0) {
            right--;
        } else {
            // OR [arr[left], arr[right]] = [arr[right], arr[left]];
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr;
};
console.log(moveNegativeUsingTwoPointer([-12, 11, -13, -5, 6, -7, 5, -3, -6])); // [-12, -6, -13, -5, -3, -7, 5, 6, 11]



/* Partitioning approach (in-place, O(n) time, O(1) space) */

const moveNegativeUsingPartition = (arr) => {
    let pivot = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
            pivot++;
        }
    }
    return arr;
};
console.log(moveNegativeUsingPartition([-1, 2, -3, 4, 5, 6, -7, 8, 9])); // [-1, -3, -7, 4, 5, 6, 2, 8, 9]


