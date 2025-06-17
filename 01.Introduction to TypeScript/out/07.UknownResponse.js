"use strict";
function response(parameter) {
    if ('value' in parameter && typeof parameter.value === 'string')
        return `${parameter.value}`;
    else
        return '-';
}
console.log(response({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(response({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(response({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }));
console.log(response({ code: 201, text: 'Created', value: 'Object Created' }));
console.log(response({ code: 404, text: 'Not found' }));
console.log(response({ code: 500, text: 'Internal Server Error' }));
//# sourceMappingURL=07.UknownResponse.js.map