function operator(param: string | number | string[], operation: 'Index' | 'Length' | 'Add', operand: number) {
    switch(operation){
        case "Index":
            if (typeof param === 'string' || 'string[]'){
                return param[operand];
            }
            break;
        case "Length":
            if (typeof param === 'string' || 'string[]'){
                return param.length
            }
            break;
        case "Length":
            if (typeof param === 'string' || 'number'){
                return parseInt(param)+operand
            }


    }
}