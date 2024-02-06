/*
Input: nums = [2, 7, 11, 15], target = 9  ---->>>> Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

//<<<<<<<<<<<<<<-------------------- Brute force approach --------------------->>>>>>>>>>>>>>>>>

var twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j];
                break;
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));

//<<<<<<<<<<<<<<--------------------***********************--------------------->>>>>>>>>>>>>>>>>


//<<<<<<<<<<<<<<--------------------- Two Pointer Approach ---------------------->>>>>>>>>>>>>>>>>

const twoSum = (nums, target) => {
    const numsWithIndices = nums.map((num, index) => ({ value: num, index }));
    numsWithIndices.sort((a, b) => a.value - b.value);
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const currentSum = numsWithIndices[left].value + numsWithIndices[right].value;
        
        if (currentSum === target) {
            return [numsWithIndices[left].index, numsWithIndices[right].index];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};
console.log(twoSum([2, 7, 11, 15], 13));

//<<<<<<<<<<<<<<--------------------***********************--------------------->>>>>>>>>>>>>>>>>


//<<<<<<<<<<<<<<----------------------- By Using object ------------------------->>>>>>>>>>>>>>>>>

var twoSum = function(nums, target){
    let newObj = {};
    for(let i = 0; i < nums.length; i++){
        let comp = target - nums[i];
        if(newObj[comp] !== undefined){
            return [newObj[comp], i]
        }
        newObj[nums[i]] = i;
    }
    return [];
};
console.log(twoSum([2, 7, 11, 15], 13));

//<<<<<<<<<<<<<<--------------------***********************--------------------->>>>>>>>>>>>>>>>>

var twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        const diffIndex = nums.indexOf(target - nums[i]);
        if(diffIndex >= 0 && diffIndex != i){
            return [i, diffIndex];
        }
    }
    return [];
};
console.log(twoSum([2, 7, 11, 15], 13));