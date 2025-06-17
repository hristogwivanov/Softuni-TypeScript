"use strict";
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workinfo) {
    let fullName = "";
    middleName
        ? fullName = `${firstName} ${middleName} ${lastName}`
        : fullName = `${firstName} ${lastName}}`;
    let hobbyList;
    hobbies
        ? hobbyList = hobbies.join(", ")
        : hobbyList = "-";
    const workinfoStr = workinfo ? `${workinfo[0]} -> ${workinfo[1]}` : '-';
    return [id, fullName, age, hobbyList, workinfoStr];
}
console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
console.log(summarizePerson(21, 'Joseph', 'Angler', 28));
console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''));
//# sourceMappingURL=05.SummarizePerson.js.map