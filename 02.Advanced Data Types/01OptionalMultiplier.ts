function multiply(
    num1?: string | number, 
    num2?: string | number, 
    num3?: string | number
): number {
    if(num1 === undefined && num2 === undefined && num3 ===undefined) return 1;

    const toNum = (x: string | number): number => 
        typeof x === "string" ? parseInt(x,10) : x;

    let product = 1;

    if (num1 !== undefined) product *= toNum(num1);
    if (num2 !== undefined) product *= toNum(num2);
    if (num3 !== undefined) product *= toNum(num3);

    return product;
}

console.log(multiply('3', 5, '10'));
console.log(multiply('2','2'));
console.log(multiply(undefined, 2, 3));
console.log(multiply(7, undefined, '2'));
console.log(multiply());