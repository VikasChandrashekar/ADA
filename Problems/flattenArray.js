let arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]
// or with decomposition syntax
const flattened = arr => [].concat(...arr);

//To flat multi level array

arr = [1, 2, [3, 4, [5, 6]]];
//to enable deep level flatten use recursion with reduce and concat
const flatDeep = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
console.log(flatDeep(arr));
// [1, 2, 3, 4, 5, 6]

//non recursive flatten deep using a stack
const flatten = (input) => {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    //reverse to restore input order
    return res.reverse();
}
console.log(flatten(arr));
// [1, 2, 3, 4, 5, 6]