/*--------------************** Count pairs with given sum **************----------------*/

/*
    Input: arr = [1, 5, 7, -1], K = 6
    Output:  2
    Explanation: Pairs with sum 6 are (1, 5) and (7, -1).

    Input: arr = [1, 5, 7, -1, 5], K = 6
    Output:  3
    Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5). 
*/

//<<<<<<<<<------------- Approach 1: Using Brute Force ------------>>>>>>>>>>//

const countPairsWithSum = (arr, k) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                count++;
            }
        }
    }
    return count;
};
console.log(countPairsWithSum([1, 2, 3, 4, 5], 6)); // Output: 2


//<<<<<<<<<-------------- Approach 2: Using Hash Map -------------->>>>>>>>>>//

const countPairSumUsingHashMap = (arr, k) => {
    let map = {};
    let count = 0;

    arr.forEach(element => {
        let complement = k - element;
        if (map[complement]) {
            count += map[complement];
        }
        map[element] = (map[element] || 0) + 1;
    });

    return count;
};
console.log(countPairSumUsingHashMap([1, 5, 7, -1, 5], 6)); // Output: 3


//<<<<<<<<<--------------- Approach 3: Using Sorting -------------->>>>>>>>>>//

const countPairsWithSumUnsingSorting = (arr, k) => {
    arr.sort((a, b) => a - b);
    let count = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === k) {
            count++;
            left++;
            right--;
        } else if (currentSum < k) {
            left++;
        } else {
            right--;
        }
    }
    return count;
};
console.log(countPairsWithSumUnsingSorting([1, 5, 7, -1], 6)); // Output: 2
