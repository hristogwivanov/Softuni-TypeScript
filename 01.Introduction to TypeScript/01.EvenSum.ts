function isEvenSum(x: number, y: number, z: number): boolean {
    return (x + y + z) %2 === 0;
}

console.log(isEvenSum(1, 2, 3))
console.log(isEvenSum(2, 2, 3))