function sumFirstAndLastArrayElements(numbers){
  let firstNumber = numbers[0];
  let lastNumber = numbers[numbers.length - 1];
  let sum = firstNumber + lastNumber;
  console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40])