function secretChat(input){
   let str = input.shift();
   let line = input.shift();
   while(line !== "Reveal"){
    let tokens = line.split(":|:");
    let command = tokens[0];
    switch(command){
        case "InsertSpace":
            let index = Number(tokens[1]);
            let arr = str.split("");
            arr.splice(index,0, " ");
            str = arr.join("");
            console.log(str)
        break;
        case "Reverse":
            let substring = tokens[1];
            
            if(str.includes(substring)){
               let array = str.split("");
               let i = str.indexOf(substring)
               console.log(i)
               let n = substring.length
               let reversed = array.splice(i,n);
               reversed= reversed.reverse();
               array.push(reversed.join(""))
               str = array.join("");
               console.log(str)
            } else{
                console.log("error");
            }
        break;
        case "ChangeAll":
            let substr = tokens[1];
            let replacement = tokens[2];
        
            for(let el of str){
                if(el == substr){
                   str = str.replace(el,replacement);
                }
            }
            console.log(str);
        break;
    }
    line = input.shift()
   }
   console.log(`You have a new text message: ${str}`);
}
secretChat([
    'heVVodar!gniV!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])