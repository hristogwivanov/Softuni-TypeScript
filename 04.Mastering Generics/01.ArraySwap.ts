function arraySwap<T>(a: T[], aIndex: number, b: T[], bIndex: number): void{
    let temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
    console.log
}

let a = ['test', '123'];
let b = ['a', 'b', 'c'];
arraySwap<string>(a, 0, b, 2)
console.log(a)
console.log(b)