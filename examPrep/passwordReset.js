function passwordReset(input){
  let str = input.shift();
  let newStr = ''; 
  
  let line = input.shift();
  while(line !== "Done"){
    let commands = line.split(" ");
    let command = commands[0];
   switch(command){
    case "TakeOdd":
        for(let i = 0; i < str.length; i++){
            if(i % 2 !== 0){
             newStr += str[i];
            }    
          }
          str = newStr;
          console.log(str);
    break;
    case "Cut":
      let index = Number(commands[1]);
      let length = Number(commands[2]);
      let arr = str.split("");
      arr.splice(index, length);
      str = arr.join("")
       console.log(str);
    break;
    case "Substitute":
        let substring = commands[1];
        let substitute = commands[2];
        if(str.includes(substring)){
          str =  str.split(substring).join(substitute);
           console.log(str);
        } else{
            console.log(`Nothing to replace!`);
        }
    break;
   }
    line = input.shift();
  }
  console.log(`Your password is: ${str}`);
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]))
