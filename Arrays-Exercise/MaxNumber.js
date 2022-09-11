function MaxNumber(arr){
   let newArray = [];
   let arrayL = arr.length;
   
   for(let i = 0; i < arrayL; i++){
     let number1 = arr[i];
     let isBiggest = true;
     
     for(let j = i +1; j < arrayL; j++){
         let number2 = arr[j];

         if(number1 <= number2){
             isBiggest = false;
         }
     }
     if (isBiggest){
         newArray.push(number1);
     }
   }
   console.log(newArray.join(` `))
}
MaxNumber([1, 4, 3, 2])