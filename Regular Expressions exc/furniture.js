function furniture(input){
   let text = input.join(' ');
   let furnitureArr = [];
   let totalSum = 0;
   let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;
   let valid;

   while((valid = pattern.exec(text)) !== null){
     let validName = valid.groups['furniture'];
     let validPrice = valid.groups['price'];
     let validQuantity = valid.groups['quantity'];

     furnitureArr.push(validName);
     totalSum += Number(validPrice) * Number(validQuantity);

   }
   console.log('Bought furniture:');
furnitureArr.forEach(el => console.log(el));
console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])