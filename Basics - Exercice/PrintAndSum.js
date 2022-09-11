function PrintAndSum(start, end){
    let sum = 0;
    let printLine = ' ';
    for(let i = start; i<= end; i++){
        if(i === end){
            printLine += `${i}`;
        } else{
            printLine += `${i} `;
        }
       
        sum += i;

    }
    console.log(printLine)
    console.log(`Sum: ${sum}`);
}
PrintAndSum(0, 26)