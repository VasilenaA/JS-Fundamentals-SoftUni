function addressBook(arr){
  let res = {};
  for(let line of arr){
    let [name, address] = line.split(':');
    res[name] = address;
  }
  let entries = Object.entries(res);
  let sortedEntries =  entries.sort(([keyA, valueA], [keyB, valueB]) =>{
    return keyA.localeCompare(keyB);
  });
  for(let [name,address] of sortedEntries){
    console.log(name, "->", address)
  }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])