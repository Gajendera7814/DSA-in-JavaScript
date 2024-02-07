/*---------******* Remove Duplicates From Unsorted Array ********-------*/
const removeDuplicatesUsingFilter = ((arr) => {
    return arr.filter((value, index) => arr.indexOf(value) === index);
});
console.log(removeDuplicatesUsingFilter([1, 7, 8, 9, 7, 1, 2]));
console.log(removeDuplicatesUsingFilter([1, 1, 3, 3, 4, 4, 5]));
/*------------------------***********************----------------------*/


/*---------******** Remove Duplicates From sorted Array *********-------*/
const removeDuplicatesUsingLoop = ((arr) => {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
});
console.log(removeDuplicatesUsingLoop([1, 1, 3, 3, 4, 4, 5]));
/*------------------------***********************----------------------*/


/*---------******* Remove Duplicates From Unsorted Array ********-------*/
const removeDuplicatesUsingReduce = ((arr) => {
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);
});
console.log(removeDuplicatesUsingReduce([1, 7, 8, 9, 7, 1, 2]));
console.log(removeDuplicatesUsingReduce([1, 1, 3, 3, 4, 4, 5]));
/*------------------------***********************----------------------*/


/*---------******* Remove Duplicates From Unsorted Array ********-------*/
const removeDuplicatesUsingSet = ((arr) => {
    return [...new Set(arr)];
});
console.log(removeDuplicatesUsingSet([1, 7, 8, 9, 7, 1, 2]));
console.log(removeDuplicatesUsingSet([1, 1, 3, 3, 4, 4, 5]));
/*------------------------***********************----------------------*/
