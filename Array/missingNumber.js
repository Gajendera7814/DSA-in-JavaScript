/* To Find Missing Number From an Array */

/*
    Input: nums = [3, 0, 1]  -->> Output: 2
    Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]  -->> Output: 8
*/

/*---------********* Missing Number From Unsorted Array ********-------*/
const missingNumber = ((nums) => {
    let n = nums.length;
    let total = (n * (n + 1)) / 2;
    for (let i = 0; i < n; i++) {
        total = total - nums[i]
    }
    return total;
});
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
/*------------------------***********************----------------------*/


/*---------********* Missing Number From sorted Array *********--------*/
const findMissingNumber = ((arr) => {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return total - sum;
});
console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]));
/*------------------------***********************-----------------------*/


/*---------********* Missing Number From sorted Array *********---------*/
const findMissingNumberXOR = ((arr) => {
    let n = arr.length;
    let x1 = arr[0];
    let x2 = 1;

    for (let i = 1; i < n; i++) {
        x1 = x1 ^ arr[i];
    }

    for (let i = 2; i <= n + 1; i++) {
        x2 = x2 ^ i;
    }

    return x1 ^ x2;
});
console.log(findMissingNumberXOR([1, 2, 3, 4, 5, 6, 7, 8, 10]));
/*------------------------***********************-----------------------*/


/*---------********* Missing Number From sorted Array *********---------*/
const findMissingNumberSorting = ((arr) => {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return arr.length + 1;
});
console.log(findMissingNumberSorting([1, 2, 3, 4]));
/*------------------------***********************-----------------------*/


/*---------********* Missing Number From sorted & unsorted Array *********---------*/
const findMissingNumberBruteForce = ((arr) => {
    let maxNumber = Math.max(...arr);
    for (let i = 1; i <= maxNumber + 1; i++) {
        if (arr.indexOf(i) === -1) {
            return i;
        }
    }
    return -1;
});

console.log(findMissingNumberBruteForce([1, 2, 3, 4, 5, 7]));
console.log(findMissingNumberBruteForce([3, 1, 2, 4, 8, 5, 6]));
/*------------------------**********************************-----------------------*/


