enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday, 
    Sunday
}

function reversedDaysOfTheWeek(dayName: string) : number {
    return Days[dayName as keyof typeof Days] || "Error!";
}

console.log(reversedDaysOfTheWeek('Monday'))
console.log(reversedDaysOfTheWeek('Friday'))
console.log(reversedDaysOfTheWeek('Invalid'))
