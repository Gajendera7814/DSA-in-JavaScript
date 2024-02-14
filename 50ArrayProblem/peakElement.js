/*<<<<<<<-------- Find a peak element which is not smaller than its neighbours --------->>>>>>>>>*/

/*
    Input: arr = [5, 10, 20, 15] --->>> Output: 20

    Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.


    Input: arr = [10, 20, 15, 2, 23, 90, 67] --->>> Output: 20 or 90

    Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.
*/


//<<<<<<<<<---------------- Brute Force Approach ------------------>>>>>>>>>>//

const findPeakBruteForce = (arr) => {
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        return arr[i];
      }
    }
    return -1;
}
// console.log(findPeakBruteForce([5, 10, 20, 15]));
  

//<<<<<<<<<---------------- Binary Search Approach ---------------->>>>>>>>>>//

const findPeakBinarySearch = (arr) => {
    let start = 0;
    let end = arr.length - 1;
  
    // Handle base case when there's only one element
    if (start === end) {
      return arr[start];
    }
  
    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);
  
      // Check if mid is a peak element
      if (mid > 0 && mid < arr.length - 1 && arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return arr[mid];
      } else if (arr[mid] > arr[mid + 1]) {
        // Peak lies in the left half
        end = mid;
      } else {
        // Peak lies in the right half
        start = mid + 1;
      }
    }
    return -1;
};
console.log(findPeakBinarySearch([10, 20, 15, 2, 23, 90, 67]));
  
  
