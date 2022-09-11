function amazingNumbers(number){
   let numToString = String(number);
   let sum = 0;
   for(let i = 0; i < numToString.length;i++){
       let num = Number(numToString[i]);
       sum += num;
   }
   let resToString = String(sum);
   let isAmazing = false;
   for(let i = 0; i< resToString.length; i++){
       if(Number(resToString[i])===9){
           isAmazing = true;
           break;
       }
   }
   let amazing = isAmazing ? "True" : "False";
   console.log(`${number} Amazing? ${amazing}`)
}
amazingNumbers(1133)