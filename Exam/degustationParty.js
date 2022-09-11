function degustationParty(input){
   let [command, guest,meal] = input.shift().split("-");
   let list = {};
   let unlikedMeals = 0;
   while(command != "Stop"){
    switch(command){
        case "Like":
          if(!list.hasOwnProperty(guest)){
             list[guest] = {};
          }
          list[guest]["guest"] = guest;
          if(list[guest]['meal'] === undefined){
            list[guest]['meal'] = ""
         }
          if (list[guest]["meal"].length != 0){
            list[guest]["meal"] += ", "
          }
          list[guest]["meal"] += meal;
        break;
        case "Dislike":
        if(list.hasOwnProperty(guest)){
         if (list[guest]['meal'].includes(meal)){
            let removeMeal = new RegExp("(,\\s)?"+meal, "gi");
            console.log(removeMeal)
            console.log(list[guest]['meal'])
            list[guest]['meal'].replace(removeMeal, "TEST");
            if(list[guest]['meal'].length === 0){
               list[guest]['meal'] = ""
            }
            unlikedMeals++;
            console.log(`${guest} doesn't like the ${meal}.`); 
         } else{
            console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
         }  
        }else{
         console.log(`${guest} is not at the party.`);
        }
        break;
    }
    [command, guest,meal] = input.shift().split("-");
   }
   for(let [guest, meal] of Object.entries(list)){
      console.log(`${guest}: ${list[guest].meal}`);
      
   }
   console.log(`Unliked meals: ${unlikedMeals}`);
}
degustationParty(["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"])



