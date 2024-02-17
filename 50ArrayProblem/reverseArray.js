/*---------------------******************* Array Reverse *******************------------------------*/

/*
    Input: [4, 5, 1, 2]  Output: [2, 1, 5, 4]

    Input: [0, 1, 2, 4, 6]  Output: [6, 4, 2, 1, 0]
*/

//<<<<<<<<<----------- Using a loop to swap elements from start to end ----------->>>>>>>>//

const reverseArray = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
};
console.log(reverseArray([4, 5, 1, 2]));


//<<<<<<<<<----------- Using the `reduce()` method to build a reversed array -------->>>>>>>>>>//

const reverseArrayUsingReduce = (arr) => {
    return arr.reduceRight((acc, val) => {
        acc.push(val);
        return acc;
    }, []);
};
console.log(reverseArrayUsingReduce([0, 1, 2, 4, 6]));