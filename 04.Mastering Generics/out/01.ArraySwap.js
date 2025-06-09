"use strict";
function arraySwap(a, aIndex, b, bIndex) {
    let temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
    console.log;
}
let a = ['test', '123'];
let b = ['a', 'b', 'c'];
arraySwap(a, 0, b, 2);
console.log(a);
console.log(b);
//# sourceMappingURL=01.ArraySwap.js.map