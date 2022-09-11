function numbers(sequence){
    let arrOfNumbers = sequence.split(" ").map(Number);
   
    let sum = 0;

    for(let el of arrOfNumbers){    
       sum += el;
    }
    let avg = sum / arrOfNumbers.length;

    arrOfNumbers =  arrOfNumbers
    .filter(el => el> avg)
    .sort((x,y) => y - x)
    .slice(0, 5);
    
    return arrOfNumbers.length > 0 ? arrOfNumbers.join(" ") : "No";
   
   
} 
console.log(numbers('10 20 30 40 50'))
console.log(numbers(`1`))