/*-------------**************** Longest Common Prefix ****************-----------------*/

/*
    Input: strs = ["flower", "flow", "flight"]
    Output: "fl"

    Input: strs = ["dog", "racecar", "car"]
    Output: ""
*/

/*<<<<<<<<<<<<--------------------- Approach - 1 ----------------------->>>>>>>>>>>>>*/

const longestCommonPrefix1 = (strs) => {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let word of strs) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') 
                return ''
        }
    }
    return prefix;
};
console.log(longestCommonPrefix1(["flower", "flow", "flight"]));

/*<<<<<<<<<<<------------------*********************------------------>>>>>>>>>>>>>>>>*/


/*<<<<<<<<<<<<--------------------- Approach - 2 ----------------------->>>>>>>>>>>>>*/

const longestCommonPrefix2 = (strs) => {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};
console.log(longestCommonPrefix2(["dog", "racecar", "car"]));

/*<<<<<<<<<<<------------------*********************------------------>>>>>>>>>>>>>>>>*/


/*<<<<<<<<<<<<--------------------- Approach - 3 ----------------------->>>>>>>>>>>>>*/

const longestCommonPrefix3 = (strs) => {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first string
    for (let i = 0; i <= strs[0].length; i++) {
        // Loop through the other strings
        for (let j = 1; j < strs.length; j++) {
            // Check if this character is also present in the same position of each string
            if (strs[0][i] !== strs[j][i]) {
                // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};
console.log(longestCommonPrefix3(["God", "Girl"]));