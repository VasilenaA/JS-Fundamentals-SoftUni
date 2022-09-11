function passwordValidator(password){
 let input = password.toString();
 
 function enoughLength(){
     if(input.length >= 6 && input.length <= 10){
         return true;
     } else{
        return false;
     }
 }
 function digits(){
     let counter = 0;
     for(symbol of input){
    let currChar = symbol.charCodeAt(0);
    if(currChar >= 48 && currChar <= 57){
        counter++
    }
  }
   return counter >= 2 ?true : false;
 }
 function onlyLettersAndDigits(inputt){
    
 }
}
passwordValidator('logIn')