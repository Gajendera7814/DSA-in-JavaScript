/*-------------------***************** Move Zeroes Problem *****************---------------------*/

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
the non-zero elements.

    Input: nums = [0, 1, 0, 3, 12]  -->>  Output: [1, 3, 12, 0, 0]
    Input: nums = [0]  -->>  Output: [0]
*/

const moveZeroes = (nums) => {
    let i, temp;
    for (i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
    }
    return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
//<<<<<<<<<-----------------*******************--------------------->>>>>>>>>>//


//<<<<<<<<<----------------- using two pointer --------------------->>>>>>>>>>//
const moveZeroesByTwoPointer = ((nums) => {
    let nonZeroIndex = 0;

    // Move all the non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }

    // Fill the remaining elements with zeroes
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
});
console.log(moveZeroesByTwoPointer([0, 1, 0, 3, 0, 0, 4]));
//<<<<<<<<<-----------------*******************--------------------->>>>>>>>>>//


//<<<<<<<<<<-------------- Using Array splice() Method ------------->>>>>>>>>>//
const moveZeroesBySplice = ((nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1); // Remove the zero at index i
            nums.push(0); // Push 0 to the end of the array
        }
    }
    return nums;
});
console.log(moveZeroesBySplice([0, 0, 3, 1, 0, 2]));
//<<<<<<<<<-----------------*******************--------------------->>>>>>>>>>//


// <<<<<<<<------------- Using filter() and concat() Methods -------->>>>>>>>>//
const moveZeroesByFilter = ((nums) => {
    const nonZeroes = nums.filter(num => num !== 0);
    const zeroes = Array(nums.length - nonZeroes.length).fill(0);
    return nonZeroes.concat(zeroes);
});
console.log(moveZeroesByFilter([0, 1, 0, 3, 2, 0, 8, 0]));

