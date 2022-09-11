function SumOfOddNumbers(n){
    let sum=0;
    let count = 0;
    
   for(let i=1; i <=100; i++){
       if(i%2 === 1){
           console.log(i);
           count +=1;
           sum+=i;  
       }
     if(count >=n){
         break;
     }  
   }
   console.log(`Sum: ${sum}`);
}
SumOfOddNumbers(3)