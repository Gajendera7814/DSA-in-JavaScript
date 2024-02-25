/*--------------***************** Find common elements in three sorted arrays ******************----------------*/

/*
    Input :-
    ar1 = [1, 5, 10, 20, 40, 80],  
    ar2 = [6, 7, 20, 80, 100] 
    ar3 = [3, 4, 15, 20, 30, 70, 80, 120]

    Output: [20, 80]

    Input :- 
    ar1 = [1, 5, 5] 
    ar2 = [3, 4, 5, 5, 10] 
    ar3 = [5, 5, 10, 20]

    Output: 5, 5
*/


//<<<<<<<<<<<------------------ Using Multiple Pointers ------------------->>>>>>>>>>>>>>

const findCommonElements = (arr1, arr2, arr3) => {
    let i = 0, j = 0, k = 0;
    const commonElements = [];

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            commonElements.push(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }

    return commonElements;
}

const arr1 = [1, 5, 10, 20, 40, 80];
const arr2 = [6, 7, 20, 80, 100];
const arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

console.log(findCommonElements(arr1, arr2, arr3)); // Output: [20, 80]


//<<<<<<<<<<<-------------------- Using Set Intersection --------------------->>>>>>>>>>>>>>

const findCommonElementsUsingSet = (arr1, arr2, arr3) => {
    const freqCounter1 = {};
    const freqCounter2 = {};
    const freqCounter3 = {};

    for (let num of arr1) {
        freqCounter1[num] = (freqCounter1[num] || 0) + 1;
    }
    
    for (let num of arr2) {
        freqCounter2[num] = (freqCounter2[num] || 0) + 1;
    }

    for (let num of arr3) {
        freqCounter3[num] = (freqCounter3[num] || 0) + 1;
    }

    const intersection = [];

    for (let key in freqCounter1) {
        if (freqCounter2[key] !== undefined && freqCounter3[key] !== undefined) {
            const count = Math.min(freqCounter1[key], freqCounter2[key], freqCounter3[key]);
            for (let i = 0; i < count; i++) {
                intersection.push(parseInt(key));
            }
        }
    }
    return intersection;
};
console.log(findCommonElementsUsingSet([1, 5, 5], [3, 4, 5, 5, 10], [5, 5, 10, 20]));
// Output: [5, 5]
