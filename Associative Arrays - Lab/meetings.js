function meetings(arr){
    let res = {};
     for(let line of arr){
        let [day, name] = line.split(' ');
        if(res.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else{
            res[day] = name;
            console.log(`Scheduled for ${day}`);
        }
     }
     for(let [key, value] of Object.entries(res)){
        console.log(`${key} -> ${value}`)
     }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])