function plantDiscovery(data){
  let plants = {};
  let n = Number(data.shift());
  let avgRating = 0;
  for(let i = 0; i< n; i++){
    let [plant, rarity] = data.shift().split("<->");
    plants[plant] = {};
    plants[plant]["rarity"] = Number(rarity);
    plants[plant]["rating"] = 0
    plants[plant]["count"] = 0;
    if(plants.hasOwnProperty(plant)){
      plants[plant]["rarity"] = Number(rarity);
    }
} 
    let line = data.shift();
    while(line !== "Exhibition"){
      let tokens = line.split(": ");
      let plantInfo = tokens[1].split(" - ");
      let command = tokens[0];
      let plant = plantInfo[0];
      switch(command){
        case "Rate":
        let rating = plantInfo[1];
          if(plants.hasOwnProperty(plant)){
            let oldRating = Number(plants[plant]["rating"]);
            plants[plant]["rating"] = Number(rating) + oldRating;
            plants[plant]["count"]++;
          } else{
            console.log("error");
          }
          
        break;
        case "Update":
          if(plants.hasOwnProperty(plant)){
            let newRarity = plantInfo[1]
          plants[plant]["rarity"] = newRarity;
          } else{
            console.log("error");
          } 
        break;
        case "Reset":
          if(plants.hasOwnProperty(plant)){
            plants[plant]["rating"] = 0;
          } else{
            console.log("error");
          } 
        break;
      }
      line = data.shift()
    }
    console.log("Plants for the exhibition:")
    Object.entries(plants).forEach(([plant,rarity,rating,count]) =>{
      if(plants[plant]["count"]===0){
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${plants[plant].rating.toFixed(2)}`);
      }else{
        avgRating = plants[plant]["rating"] / plants[plant]['count'];
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avgRating.toFixed(2)}`)
      }
    });
}
plantDiscovery((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
)