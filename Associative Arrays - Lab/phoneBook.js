function phoneBook(arr){
  let phoneBook = {};

  for(let line of arr){
    let tokens = line.split(' ');
    let name = tokens[0];
    let phoneNumber = tokens[1];
    phoneBook[name] = phoneNumber;
  }
  for(let key in phoneBook){
    console.log(key, "->", phoneBook[key]);
  }
}
phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])