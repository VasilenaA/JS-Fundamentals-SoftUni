function hogwarts(input){
 let spell = input.shift();
 let commands = input.shift().split(" ");
  while(commands != "Abracadabra"){
    let command = commands[0];
    switch(command){
      case "Abjuration":
        spell = spell.toUpperCase();
        console.log((spell));
      break;
      case "Necromancy":
        spell = spell.toLowerCase();
        console.log(spell);
      break;
      case "Illusion":
        let index = commands[1];
        let letter = commands[2];
        if(index >=0 && index < spell.length){
          let char = spell.charAt(index);
          spell = spell.replace(char,letter);
          console.log("Done!");
        } else{
          console.log("The spell was too weak.");
        }
      break;
      case "Divination":
        let firstSubstr = commands[1];
        let secondSubstr = commands[2];
        if(spell.includes(firstSubstr)){
          for(let el of spell){
            if(el == firstSubstr){
              spell = spell.replace(firstSubstr, secondSubstr);
            }
          }
          console.log(spell);
        } else{
          continue;
        }
      break;
      case "Alteration":
        let substring = commands[1];
        if(spell.includes(substring)){
          spell = spell.replace(substring,"");
          console.log(spell);
        } else{
          continue;
        }
      break;
      default: console.log("The spell did not work!");
    } 
    commands = input.shift().split(" ");
  }
}
hogwarts(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"])
