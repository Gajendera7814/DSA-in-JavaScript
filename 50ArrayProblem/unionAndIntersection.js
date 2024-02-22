/*------------************** Union and Intersection of two sorted arrays *****************/

/*
    Input: arr1 = [1, 3, 4, 5, 7], arr2 = [2, 3, 5, 6] 
    
    Output: Union = [1, 2, 3, 4, 5, 6, 7], Intersection = [3, 5]


    Input: arr1 = [2, 5, 6],  arr2 = [4, 6, 8, 10] 
    
    Output: Union = 2, 4, 5, 6, 8, 10],  Intersection = [6]

*/


//<<<<<<------- Approach 1: Using Sets for Union and Intersection ------->>>>>>>//

const unionIntersection = (arr1, arr2) => {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    // Union
    let unionSet = new Set([...set1, ...set2]);

    // Intersection
    let intersectionSet = new Set([...set1].filter(x => set2.has(x)));

    return {
        union: Array.from(unionSet),
        intersection: Array.from(intersectionSet)
    };
};
let result = unionIntersection([1, 3, 4, 5, 7], [2, 3, 5, 6]);
console.log("Union:", result.union);
console.log("Intersection:", result.intersection);

// Output:- Union: [1, 3, 4, 5, 7, 2, 6], Intersection: [ 3, 5 ]

//<<<<<<<<--------------- Approach 2: Using Two Pointers -------------->>>>>>>>//

const unionAndIntersection = (arr1, arr2) => {
    let union = [];
    let intersection = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            union.push(arr1[i]);
            i++;
        } else if (arr2[j] < arr1[i]) {
            union.push(arr2[j]);
            j++;
        } else {
            union.push(arr1[i]);
            intersection.push(arr1[i]);
            i++;
            j++;
        }
    }

    while (i < arr1.length) {
        union.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        union.push(arr2[j]);
        j++;
    }

    return {
        union: union,
        intersection: intersection
    };
};
let responce = unionAndIntersection([2, 5, 6], [4, 6, 8, 10]);
console.log("Union:", responce.union);                 
console.log("Intersection:", responce.intersection);

/*
Output:-
    Union: [ 2, 4, 5, 6, 8, 10 ]
    Intersection: [ 6 ]
*/