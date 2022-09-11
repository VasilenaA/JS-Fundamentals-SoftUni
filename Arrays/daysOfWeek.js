function daysOfWeek(day){
    if(day <1 || day > 7){
        console.log("Invalid day!");
    }
    else {
        let dayNameArr = [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday", 
        "Sunday"
    ];
    console.log(dayNameArr[day-1]);
    }
}
daysOfWeek([3])