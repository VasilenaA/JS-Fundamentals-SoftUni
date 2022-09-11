function fancyBarcode(data){
    let barcodeCount = Number(data.shift());
    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;
    for(let i = 0; i < barcodeCount; i++){
        let barcode = data[i];
        let match = pattern.exec(barcode);
        let concatenateDigits = "";
        let isValid = false;
        while(match !== null){
            isValid = true;
           let barcodeText = match[2]
            for(let ch of barcodeText){
                if(!isNaN(Number(ch))){
                    concatenateDigits += ch;
                }
            }
            match = pattern.exec(barcode);
        }
        if(isValid){
            concatenateDigits = concatenateDigits !== "" ? concatenateDigits: "00"
            console.log(`Product group: ${concatenateDigits}`);   
         }else{
            console.log("Invalid barcode");
         }
    }
}
fancyBarcode((["6", "@###Val1d1teM@###", "@#ValidIteM@#", "##InvaliDiteM##", "@InvalidIteM@", "@#Invalid_IteM@#", "@#ValiditeM@#"]))