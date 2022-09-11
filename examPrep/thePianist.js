function thePianist(input){
   let n = Number(input.shift());
   let pieces = {};
   for(let i = 0; i< n; i++){
    let [piece, composer, key] = input.shift().split("|");
    if(!pieces.hasOwnProperty(piece)){
        pieces[piece] = {}
    }
    pieces[piece][composer] = key;
   }
   let line = input.shift();
   while(line !== "Stop"){
    let [command, piece, composer, key] = line.split("|");
    switch(command){
        case "Add": 
         if(pieces.hasOwnProperty(piece)){
            console.log(`${piece} is already in the collection!`);
            break;
         }
         pieces[piece] = {};
         pieces[piece][composer] = key;
         console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        break;
        case "Remove":
            if(pieces.hasOwnProperty(piece)){
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                break;
            }
        break;
        case "ChangeKey":
            if(!pieces.hasOwnProperty(piece)){
             console.log(`Invalid operation! ${piece} does not exist in the collection.`);
             break;
            }
           let newKey = composer;
           for(let [keyComposer, keyValue] of Object.entries(pieces[piece])){
            pieces[piece][keyComposer] = newKey;
            
           }
           console.log(`Changed the key of ${piece} to ${newKey}!`);
        break;
    }
    line = input.shift();
   }
   for(let [piece,composer] of Object.entries(pieces)){
    for(let composerKey of Object.keys(pieces[piece])){
        console.log(`${piece} -> Composer: ${composerKey}, Key: ${composer[composerKey]}`);
    }   
   }
}
thePianist([  '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',  
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',  
    'Add|Fur Elise|Beethoven|C# Minor',   
    'Remove|Clair de Lune',   
    'ChangeKey|Moonlight Sonata|C# Major', 
    'Stop' 
    ])