"use strict";
function operator(param, operation, operand) {
    switch (operation) {
        case "Index":
            if (typeof param === 'string' || Array.isArray(param)) {
                return param[operand];
            }
            break;
        case "Length":
            if (typeof param === 'string' || Array.isArray(param)) {
                return param.length % operand;
            }
            break;
        case "Add":
            if (typeof param === 'string' || typeof param === 'number') {
                return Number(param) + operand;
            }
    }
}
console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));
console.log(operator('short string1', 'Length', 5));
console.log(operator('7', 'Add', 3));
console.log(operator(11, 'Add', 3));
//# sourceMappingURL=02.Operator.js.map