function Rounding(number,n ){
    if(n > 15){
        n =15;
    }
    let roundedNumber = number.toFixed(n);
    console.log(parseFloat(roundedNumber));
}
Rounding(3.145896, 3)