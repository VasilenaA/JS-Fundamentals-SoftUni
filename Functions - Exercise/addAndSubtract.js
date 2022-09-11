function addAndSubtract(firstNum, secondNum, thirdNum){
    let sumFirstAndSecond = sum(firstNum, secondNum);
    let finalResult = subtract(sumFirstAndSecond, thirdNum);
    

    function sum(firstNum, secondNum){
         return firstNum + secondNum;
    }
    function subtract(sumFirstAndSecond, thirdNum){
        return sumFirstAndSecond - thirdNum;
    }
    console.log(finalResult);
}
addAndSubtract(23, 6, 10)