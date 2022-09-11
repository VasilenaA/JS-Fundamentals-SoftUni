function treasureHunt(input){
    let items = input.shift().split("|");
    let index = 0;
    let command = input[index];
    index++;

    while(command !== "Yohoho!"){
        let tokens = command.split(" ");
        let order = tokens.shift();
        switch(order){
            case "Loot":
                for(let el of tokens){
                    if(!items.includes(el)){
                        items.unshift(el);
                    }
                }
                 break;
            case "Drop":
                let i = Number(tokens[0]);
                if(i< 0 || i > items.length){
                    command = input[index];
                    index++;
                    continue;
                }
                let removed = items.splice(i,1);
                items.push(removed[0]);
                  break;
            case "Steal":
                let count = Number(tokens[0]);
                let stolen = items.splice(-count);
                console.log(stolen.join(", "));
                 break;
        }
        command = input[index];
        index++;
    }
    let sum = 0;
    for(let el of items){
        sum += el.length;
    }
    if(items.length > 0){
        let avg = sum / items.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }else{
        console.log("Failed treasure hunt.");
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
