/*-------------------******************** Group Anagrams *********************---------------------*/

/*
    Input: strs = ["eat","tea","tan","ate","nat","bat"]

    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


    Input: strs = [""] ---->>>> Output: [[""]]

    Input: strs = ["a"] ---->>>> Output: [["a"]]
*/

/*<<<<<<<<<<------------------************** Using Hash Map ***************--------------->>>>>>>>>>*/

const groupAnagramsUsingHashMap = (strs) => {
    const mp = new Map();
    const ans = [];

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (mp.has(sortedStr)) {
            ans[mp.get(sortedStr)].push(str);
        } else {
            mp.set(sortedStr, ans.length);
            ans.push([str]);
        }
    }
    return ans;
};
console.log(groupAnagramsUsingHashMap(["eat", "tea", "tan", "ate", "nat", "bat"]));


/*<<<<<<<<<<------------------**************** Using Object ***************--------------->>>>>>>>>>*/

const groupAnagramsUsingObject = (strs) => {
    const groups = {};

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (groups[sortedStr]) {
            groups[sortedStr].push(str);
        } else {
            groups[sortedStr] = [str];
        }
    }
    return Object.values(groups);
}
console.log(groupAnagramsUsingObject([""]));
