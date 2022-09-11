function friendListMaintenance(input){
   
    let index = 0;
    let command = input[index];
    index++ 
    let names = command.split(", ").slice();
    
   let blacklistedCount = 0;
   let lostedCount = 0;

    while(command != "Report"){
        let commands = command.split(" ");
        let order = commands.shift();
        switch(order){
        case "Blacklist": 
        let name = commands[0];
        
            if(names.includes(name)){
                let indexOfName = names.indexOf(name);
                names.splice(indexOfName,1,"Blacklisted");
                console.log(`${name} was blacklisted.`);
                blacklistedCount++;
            } else{
                console.log(`${name} was not found.`);
            }
            break;
        case "Error":
            let i = Number(commands[0]);
                 if(i > 0 && i < names.length){
                     let nameToChek = names[i];
                     if(nameToChek != "Blacklisted" && nameToChek != "Lost"){
                        console.log(`${nameToChek} was lost due to an error.`);
                        names.splice(i,1,"Lost");
                        lostedCount++
                     }
                 } 
             break;
        case "Change":
           let index = Number(commands[0]);
           let newName = commands[1];
           if(index >= 0 && index < names.length){
            let nameToChek = names[index];
            console.log(`${nameToChek} changed his username to ${newName}.` );
             names.splice(index, 1, newName);
           }
             break;

        }     
        command = input[index];
        index++ 
    }
    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostedCount}`);
    console.log(names.join(' '));
} 
friendListMaintenance(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])
console.log("-----");
friendListMaintenance(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"])



