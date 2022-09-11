function worldTour(input) {
    let res = input.shift();

    //console.log(firstInfo)
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(":");
        let command = commands.shift();
        if (command === "Travel") {
            console.log(`Ready for world tour! Planned stops: ${res}`);
            break;
        }
        switch (command) {
            case "Add Stop":
                let indexToAdd = commands[0];
                let strToAdd = commands[1];
                if (indexToAdd >= 0 && indexToAdd <= res.length) {
                    res = res.slice(0, indexToAdd) + strToAdd + res.slice(indexToAdd);
                    console.log(res);
                } else {
                    console.log(res);
                    continue;
                }

                break;
            case "Remove Stop":
                let startIndex = Number(commands[0]);
                let endIndex = Number(commands[1]) + 1;
                if (startIndex >= 0 && startIndex <= res.length && endIndex >= 0 && endIndex <= res.length) {
                    res = res.slice(0, startIndex) + res.slice(endIndex)
                    console.log(res);
                } else {
                    console.log(res);
                    continue
                }
                break;
            case "Switch":
                let oldStr = commands[0];
                let newStr = commands[1];
                if (res.includes(oldStr)) {
                    res = res.replace(oldStr, newStr);
                    console.log(res)
                } else {
                    console.log(res);
                    continue;
                }
                break;
        }

    }

}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]))