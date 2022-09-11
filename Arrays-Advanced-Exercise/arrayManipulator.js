function arrayManipulator(nums, commands){
   for(let i = 0; i < commands.length; i++){
      let currentValues = commands[i].split(' ');
      let currentComand = currentValues.shift();
      currentValues = currentValues.map(Number);

      let sumPairs = 0;
      let sumPairsArr = [];

      switch (currentComand) {
        case "add":
            let indexToAdd = currentValues[0];
            let elementToAdd = currentValues[1];
            nums.splice(indexToAdd, 0 , elementToAdd);
            break;
        case "addMany":
            let indexToAddMany = currentValues.shift();  

            nums.splice(indexToAddMany,0,[...currentValues]);
             break; 
        case "contains":
            console.log(nums.indexOf(currentValues[0]));
            break;
        case "remove":
            let indexToRemove = currentValues[0];
            nums.splice(indexToRemove,1);
            break;
        case "shift":
            for(let i =0; i < currentValues[0]; i++){
                nums.push(nums.shift(' '));
            }
            break;
        case "sumPairs":
            if(nums.length % 2 !== 0){
                nums.push(0);
            }else{
                for(let i =0; i <nums.length;i+=2){
                  sumPairs += nums[i] + nums[i+1];
                  sumPairsArr.push(sumPairs);
                }
            }
            nums = [...sumPairsArr];
            break;
        case "print":
            console.log(`[${nums.join(', ')}]`);
            break;
      }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8',
     'contains 1',
     'contains 3', 
     'print'])