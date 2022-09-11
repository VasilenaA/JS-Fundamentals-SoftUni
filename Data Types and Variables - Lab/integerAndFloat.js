function integerAndFloat(first, second, third){
   let res = first + second + third;
   let resToString = String(res);
   let isFloat = false;
   for(let i = 0; i < resToString.length; i++){
        if(resToString[i] === "."){
            isFloat = true;
        }
   }
   console.log(`${res} - ${isFloat ? "Float" : "Integer"}`);
}
integerAndFloat(9, 100, 1.1)