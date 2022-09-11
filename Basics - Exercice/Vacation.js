function Vacation(groupOfPeople, type, day){
    let price = 0;
    let totalPrice =0;
    switch(type){
        case "Students": 
         if(day === "Friday"){
            price = 8.45;
            totalPrice = groupOfPeople * price;
         } else if(day === "Saturday"){
             price = 9.80;
             totalPrice = groupOfPeople * price;
         } else if(day === "Sunday"){
             price = 10.46;
             totalPrice = groupOfPeople* price;
         }
         if(groupOfPeople>=30){
             totalPrice *= 0.85;
         }
         break;
        case "Business":
            if(day === "Friday"){
                price = 10.90;
                totalPrice = groupOfPeople * price;
             } else if(day === "Saturday"){
                 price = 15.60;
                 totalPrice = groupOfPeople * price;
             } else if(day === "Sunday"){
                 price = 16;
                 totalPrice = groupOfPeople* price;
             }
             if(groupOfPeople>=100){
                 totalPrice = totalPrice - (10* price)
             }
             break;
        case "Regular":
            if(day === "Friday"){
                price = 15;
                totalPrice = groupOfPeople * price;
             } else if(day === "Saturday"){
                 price = 20;
                 totalPrice = groupOfPeople * price;
             } else if(day === "Sunday"){
                 price = 22.50;
                 totalPrice = groupOfPeople* price;
             }
             if(groupOfPeople>=10 && groupOfPeople<=20){
                 totalPrice *= 0.95;
             }
             break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
Vacation(15,
    "Regular",
    "Sunday"
    )