function manOWar(input){
    let pirateShip = input.shift().split(">");
    let warShip = input.shift().split(">");
    let maxHealthCapacity = input.shift();
    let index = 0;
    let commands = input[index];
    index++;
    let isBreak = false;
    while(commands !== "Retire"){
         let command = commands.split(" ");
         let order = command.shift();
         switch(order){
            
        case "Fire":
                let i = Number(command[0]);
                let damageForWarShip = Number(command[1]);
                if(i < 0 || i > warShip.length){
                    commands = input[index];
                    index++;
                    continue;
                }               
                if(maxHealthCapacity <= 0){
                    console.log("You won! The enemy ship has sunken.");
                    isBreak = true;
                    return;
                }else{
                  let damaged = Number(warShip.splice(i,1,)) - damageForWarShip;
                  warShip.splice(i,0,damaged);
                  maxHealthCapacity -= damaged;
                }
                 break;
        case "Defend": 
                let startIndex = Number(command[0]);
                let endIndex = Number(command[1]);
                let damageForPirateShip = Number(command[2]);
                if(startIndex < 0 || startIndex > pirateShip.length || endIndex <0 || endIndex > pirateShip.length){
                    commands = input[index];
                    index++;
                    continue;
                    }           
               // if(maxHealthCapacity <= 0){
                   // console.log("You won! The enemy ship has sunken.");
                   // isBreak = true;
                  //  return;
                //}else{
                    for(let i = startIndex; i <= endIndex; i++){
                        pirateShip[i] = pirateShip[i] - damageForPirateShip;
                        maxHealthCapacity -= Number(pirateShip[i]);
                        if(pirateShip[i] < 0){
                            console.log("You won! The enemy ship has sunken.");
                            return;
                        }
                     } 
                //}
                 break;
        case "Repair": 
            let indexToHeal = Number(command[0]);
            let heal = Number(command[1]);
                if(indexToHeal < 0 || indexToHeal > pirateShip.length){
                commands = input[index];
                index++;
                continue;
                }
              pirateShip[indexToHeal] += heal;
              if (pirateShip[indexToHeal] > maxHealthCapacity) {
                pirateShip[indexToHeal] = maxHealthCapacity;
            }
                
                 break;
        case "Status":
            let percentRepair = 0.2 * maxHealthCapacity;
            let count = 0;
            for(let el of pirateShip){
                if(el < percentRepair){
                    count ++;
                }
            }
            console.log(`${count} sections need repair.`);
             break;
         }
         commands = input[index];
         index++
    }
   
    if(!isBreak){
         let pirateStatus = 0;
    let warshipStatus = 0;
    for(let el of pirateShip){
        pirateStatus += Number(el);
    }
    for(let el of warShip){
        warshipStatus += Number(el);
    }
    console.log(`Pirate ship status: ${pirateStatus} \n Warship status: ${warshipStatus}`)
    }
}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
console.log(`---------`)
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

