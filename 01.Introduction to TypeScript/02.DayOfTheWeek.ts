enum days {
    Monday =1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function dayOfTheWeek (day: number) : string {
    return days[day] || 'Error!'; 
}

console.log(dayOfTheWeek(1));
console.log(dayOfTheWeek(5));
console.log(dayOfTheWeek(-1));