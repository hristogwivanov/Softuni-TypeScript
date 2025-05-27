"use strict";
var days;
(function (days) {
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
    days[days["Sunday"] = 7] = "Sunday";
})(days || (days = {}));
function dayOfTheWeek(day) {
    return days[day] || 'Error!';
}
console.log(dayOfTheWeek(1));
console.log(dayOfTheWeek(5));
console.log(dayOfTheWeek(-1));
//# sourceMappingURL=02.DayOfTheWeek.js.map