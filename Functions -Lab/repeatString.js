function repeatString(str, count){
   let buff = " ";

   for(let i = 0; i < count; i++){
       buff += str;
   }
   return buff
}
console.log(repeatString("abc", 3))