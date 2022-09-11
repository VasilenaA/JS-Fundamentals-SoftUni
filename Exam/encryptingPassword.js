function encryptingPassword(input){
    let n = Number(input.shift());
    let regex = /^([\D]{1,}?>)(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([<>\D]{3})(<[\D]{1,}?)$/gm
    for(let i =0; i < n; i++){
        let code = input[i];
        let match = regex.exec(code);
        if (match != null){
            var start = match[1];
            var end = match[6];
            if ((start.length == end.length) && (start.replace(">", "") == end.replace("<", ""))){
                var password = `${match[2]}${match[3]}${match[4]}${match[5]}`
                console.log(`Password: ${password}`)
            } else {
                console.log(`Try another password!`);
            }
        } else {
            console.log(`Try another password!`);
        }
    }
}
encryptingPassword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])
