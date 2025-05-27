function convertArrays(input: string[]): [output: string, length: number]{
    let output: string = input.join("");
    return [output, output.length]   
}

console.log(convertArrays(['How', 'are', 'you?']))
console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']))