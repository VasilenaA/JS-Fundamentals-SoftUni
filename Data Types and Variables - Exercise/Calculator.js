function Calculator(number, operator, anotherNumber){
    let sum = 0;
    switch (operator){
        case "+": sum = number + anotherNumber; break;
        case "-": sum = number - anotherNumber; break;
        case "/": sum = number/ anotherNumber; break;
        case "*": sum = number* anotherNumber; break;
    }
    console.log(sum.toFixed(2));
}
Calculator(25.5,

    '-',
    
    3)