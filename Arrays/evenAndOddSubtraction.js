function evenAndOddSubtraction(arr){
     let even = 0;
     let odd = 0;
     let result = 0;
     for(let i = 0; i < arr.length; i++){
        let currentNum = Number(arr[i]);
        if(currentNum % 2 === 0){
            even += currentNum;
        }
        else{
            odd+=currentNum;
     }
     
    }
    result = even - odd;
    console.log(result)
}
evenAndOddSubtraction([3,5,7,9])