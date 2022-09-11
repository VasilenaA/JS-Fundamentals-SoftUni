function ArrayRotation(arr, number){
   while(number > 0){
    let elementToMove = arr.shift();
    arr.push(elementToMove);   
    number--;
   }
   console.log(arr.join(` `))

}
ArrayRotation([51, 47, 32, 61, 21], 2)