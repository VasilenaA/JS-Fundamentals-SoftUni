function processOddNumbers(numbers){
 let filterElements = numbers.filter((el,i)=> i % 2==1);
 let doubledNumber = filterElements.map(x => x*2);
 let reversedNumbers = doubledNumber.reverse();
 console.log(reversedNumbers.join(" "));

}
processOddNumbers([10,15,20,25])