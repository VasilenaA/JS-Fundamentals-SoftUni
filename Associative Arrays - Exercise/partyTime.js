function partyTime(input){
 let vip = [];
 let normal = [];
 let isParty = false;

 for(let line of input){
    if(line == "PARTY"){
       isParty = true;
       continue;
    }
    
    if(!isParty){
        let firstCh = line[0];
        if(isNaN(firstCh)){
            normal.push(line);
        } else{
            vip.push(line);
        }
    } else{
        let firstCh = line[0];
        if(isNaN(firstCh)){
            let index = normal.indexOf(line);
            normal.splice(index,1);
        } else{
            let index = vip.indexOf(line);
            vip.splice(index,1);
        }
    }
 }
 let size = vip.length + normal.length;
  console.log(size);
  for(let el of vip){
    console.log(el);
  }
  for(let el of normal){
    console.log(el);
  }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])