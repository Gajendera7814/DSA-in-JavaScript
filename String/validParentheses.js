/*---------------************* Valid Parentheses **************------------------*/

/*
    Input: s = "()"
    Output: true

    Input: s = "()[]{}"
    Output: true

    Input: s = "(]"
    Output: false
*/


//<<<<<<<<<---------------------- Approach - 1 ---------------------->>>>>>>>>>>>*/

const isValid = (s) => {
    // create an empty stack to store opening brackets
    let stack = []; 

    // loop through each character in the string
    for (let c of s) {
        // if the character is an opening bracket
        if (c === '(' || c === '{' || c === '[') {
            // push it onto the stack
            stack.push(c);
        } else {
            if (!stack.length || (c === ')' && stack[stack.length - 1] !== '(') || (c === '}' && stack[stack.length - 1] !== '{') 
            || (c === ']' && stack[stack.length - 1] !== '[')) {
                return false;
            }
            stack.pop(); // otherwise, pop the opening bracket from the stack
        }
    }
    /* if the stack is empty, all opening brackets have been matched with their corresponding closing brackets, so the string 
    is valid, otherwise, there are unmatched opening brackets, so return false */
    return !stack.length; 
};
console.log(isValid("()"));


//<<<<<<<<<---------------------- Approach - 2 ---------------------->>>>>>>>>>>>*/
const isValid2 = (s) => {
    if(s.length %2 !== 0) return false;
    let stack = [];
    for(let i = 0; i < s.length; i++){
        // In the conditions push the corresponding closing brackets
        if(s[i] === '('){
            stack.push(')')
        } else if (s[i] === '['){
            stack.push(']')
        } else if (s[i] === '{'){
            stack.push('}')
        } 
        /* it will come to this condition if a closing bracket is encountered on traversing, here we will pop the bracket from 
        the stack. Since the order should mathch. Obviously the current looped element must match with the popped element. 
        If it doesn't match, it means a wrong bracket was closed and was not in order and we return false. */
        else if (stack.length === 0 || stack.pop() !== s[i]){
            return false;
        }
    }
    /* here we return true if all the brackets are properly popped and return false if there are more stack elements. 
    This means some opening bracket was not closed properly*/
    return stack.length === 0 ?  true :  false
};
console.log(isValid2("()[]{}"));


//<<<<<<<<<---------------------- Approach - 3 ---------------------->>>>>>>>>>>>*/

const isValid3 = (s) => {
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
    for (const char of s) {
        if (!characters[char]){
        stack.push(char); 
        } 
        else if (stack.pop() !== characters[char]){
            return false;
        } 
    }
    return stack.length === 0;
};
console.log(isValid3("(]"));