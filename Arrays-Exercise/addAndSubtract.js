function addAndSubtract(input){
    let originalSum = 0;
    let lastSum = 0;
    let inputL = input.length
    for(let n = 0; n< inputL; n++){
      
        originalSum += input[n];

        if(input[n] % 2 === 0){
           input[n] += n;
        } else{
            input[n] -=n;
        }
        lastSum += input[n]
    }
    console.log(input);
    console.log(originalSum);
    console.log(lastSum);
}
addAndSubtract([5, 15, 23, 56, 35])