/*-----------********* Remove an Element at Specific Index from an Array *********-----------*/

/*

    Input: [4, 5, 9, 8, 1], index = 3 --->>> Output: [ 4, 5, 9, 1]

    Input: [0, 5, -1, 8, 3, 7, 15], index = 2 --->>> Output: [0, 5, 8, 3, 7, 15]

*/

//<<<<<<<<<<---------------*********** Brute force approach ***********--------------->>>>>>>>>>>

const RemoveElement = (arr, index) => {
    for (let i = index; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    return arr;
}
let arr = [4, 5, 9, 8, 1];
let removeArr = RemoveElement(arr, 3);
console.log(removeArr);

//<<<<<<<<<<------------------****************************************------------------>>>>>>>>>>


//<<<<<<<<<<------------------************* Approach - 2 *************------------------>>>>>>>>>>

const RemoveElement2 = (arr, index) => {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(RemoveElement2([1, 2, 3, 4, 5], 2));

//<<<<<<<<<<------------------****************************************------------------>>>>>>>>>>>


//<<<<<<<<<<---------------*********** Using spread operator ***********--------------->>>>>>>>>>>>

const RemoveElementBySpreadOperator = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
console.log(RemoveElementBySpreadOperator([0, 5, -1, 8, 3, 7, 15], 2));

//<<<<<<<<<<------------------****************************************------------------>>>>>>>>>>>


//<<<<<<<<<<---------------*********** Using filter operator ***********--------------->>>>>>>>>>>>

const RemoveElementByUsingFilter = (arr, index) => {
    return arr.filter((ele, indexToRemove) => index !== indexToRemove);
}
console.log(RemoveElementByUsingFilter([0, 5, -1, 8, 3, 7], 3));

//<<<<<<<<<<------------------****************************************------------------>>>>>>>>>>>


//<<<<<<<<<<---------------*********** Using slice operator ***********---------------->>>>>>>>>>>>

const RemoveElementByUsingSlice = (arr, index) => {
    return arr.slice(0, index).concat(arr.slice(index + 1));
}
console.log(RemoveElementByUsingSlice([4, 5, 9, 8, 1], 4));

//<<<<<<<<<<------------------****************************************------------------>>>>>>>>>>>
