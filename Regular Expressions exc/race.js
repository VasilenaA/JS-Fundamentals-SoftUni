function race(input){
   let nameMap = new Map();
   let names = input.shift().split(', ');
   names.forEach(person => {
    nameMap.set(person,0)
   });
   let letterPattern = /[A-Za-z]+/gm;
   let diggitsPattern = /\d/g;

   for(let i = 0; i < input.length; i++){
    let currentLine = input[i];
       if(currentLine === `end of race`){
         break;
       }
       let name = currentLine.match(letterPattern).join('');
       let distance = currentLine.match(diggitsPattern).reduce((a,b) =>{
        return Number(a) + Number(b)
       },0);
       if(nameMap.has(name)){
         let prevDistance = nameMap.get(name);
         prevDistance += distance;
         nameMap.set(name, prevDistance);
       }
   }
   let sortedNames = Array.from(nameMap).sort((a,b) =>{
    return b[1] - a[1]
   });
   let winners = sortedNames.slice(0,3);
   console.log(`1st place: ${sortedNames[0][0]}`);
   console.log(`2nd place: ${sortedNames[1][0]}`);
   console.log(`3rd place: ${sortedNames[2][0]}`);
   
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])