function chatLogger(input){
    let index = 0;
    let commands = input[index].split(" ");
    index++
    let messageFinal = [];
    while(commands != "end"){
        let command = commands.shift();
        let message  = commands[0];
        switch(command){
            case "Chat":
                messageFinal.push(message);
                 break;
            case "Delete":
                if(messageFinal.includes(message)){
                    let indexOfMessage = messageFinal.indexOf(message);
                        messageFinal.splice(indexOfMessage, 1);
                } else{
                     commands = input[index].split(" ");
                     index++
                    continue;
                }
                 break;
            case "Edit":
                let editedVersion = commands[1];
                if(messageFinal.includes(message)){
                    let indexOfMessage = messageFinal.indexOf(message);
                        messageFinal.splice(indexOfMessage, 1,editedVersion);
                } else{
                     commands = input[index].split(" ");
                    index++
                   continue;
                }
                 break;
            case "Pin":
                if(messageFinal.includes(message)){
                    let indexOfMessage = messageFinal.indexOf(message);
                        let lastIndex = messageFinal.splice(indexOfMessage, 1);
                        messageFinal.push(lastIndex);
                } else{
                  commands = input[index].split(" ");
                    index++
                   continue;
                }
                 break;
            case "Spam":
                for(let el of commands){
                    messageFinal.push(el);
                }
                 break;
        }   
        commands = input[index].split(" ");
        index++
    }
    console.log(messageFinal.join("\n"));
}
chatLogger(["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"])
console.log("------");
chatLogger(["Chat Hello",
"Delete John",
"Pin Hi",
"end"])
console.log("---");
chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])

