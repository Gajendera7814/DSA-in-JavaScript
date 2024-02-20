/*-------------************* Find Subarray with given sum ************---------------*/

/*
    Input: [1, 4, 20, 3, 10, 5], sum = 33
    Output: Sum found between indexes 2 and 4

    Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33

    Input: [1, 4, 0, 0, 3, 10, 5], sum = 7
    Output: Sum found between indexes 1 and 4

    Explanation: Sum of elements between indices 1 and 4 is 4 + 0 + 0 + 3 = 7
*/

//<<<<<<<<<<<-------------------- Approach 1: Brute Force ---------------------->>>>>>>>>>>>>//

const subarrayWithGivenSum = (arr, targetSum) => {
    for (let start = 0; start < arr.length; start++) {
        let currentSum = 0;
        for (let end = start; end < arr.length; end++) {
            currentSum += arr[end];
            if (currentSum === targetSum) {
                return [start, end];
            }
        }
    }
    return null;
};
console.log(subarrayWithGivenSum([1, 4, 20, 3, 10, 5], 33)); // Output: [2, 4]


//<<<<<<<<<<<-------------------- Using Prefix Sum (Hash Map) -------------------->>>>>>>>>>>>>//
 
const subarrayWithGivenSumByHashMap = (arr, targetSum) => {
    let prefixSum = {};
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum === targetSum) {
            return [0, i];
        }
        if (prefixSum[currentSum - targetSum] !== undefined) {
            return [prefixSum[currentSum - targetSum] + 1, i];
        }
        prefixSum[currentSum] = i;
    }
    return null;
};
console.log(subarrayWithGivenSumByHashMap([1, 4, 0, 0, 3, 10, 5], 7)); // Output: [1, 4]

