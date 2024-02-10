/*---------------************ Search Insert Position ************----------------*/

/*
Input: nums = [1, 3, 5, 6], target = 5 ----->>>>> Output: 2
Input: nums = [1, 3, 5, 6], target = 2 ----->>>>> Output: 1
Input: nums = [1, 3, 5, 6], target = 7 ----->>>>> Output: 4
*/

const searchInsert = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    let mid;

    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);

        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    nums.splice(low, 0, target);
    return low;
}
let expResult = searchInsert([1, 3, 5, 6, 7], 3);
console.log("Index of target element is :- ", expResult);


// Approach - 2
const searchInsertPosition = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}
console.log(searchInsertPosition([1, 3, 5, 6], 5));

