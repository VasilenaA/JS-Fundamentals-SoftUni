function needForSpeedIII(input){
    let n = Number(input.shift());
    let cars = {};
    for(let i =0 ; i < n; i++){
        let [car, mileage, fuel] = input.shift().split("|");
       cars[car] = {};
       cars[car]["car"] = car;
       cars[car]["mileage"] = Number(mileage);
       cars[car]["fuel"] = Number(fuel);
    }
    let line = input.shift();
    while(line !== "Stop"){   
        let tokens = line.split(" : ");
        let command = tokens[0];
        let car = tokens[1]        
        switch(command){
         case "Drive":
                let distance = Number(tokens[2]);
                let requestedFuel = Number(tokens[3]);
                    if(cars[car]["fuel"] < requestedFuel){
                       console.log("Not enough fuel to make that ride");
                    } else if(cars[car]["fuel"] >= requestedFuel){
                       let oldFuel = cars[car].fuel;
                       cars[car]["fuel"] = oldFuel - requestedFuel;
                       cars[car]["mileage"] += distance;
                       console.log(`${car} driven for ${distance} kilometers. ${requestedFuel} liters of fuel consumed.`);
                    }
                    if(cars[car]["mileage"] >= 100000){
                      delete cars[car];
                      console.log(`Time to sell the ${car}!`);
                    }  
            break;
            case "Refuel":
                let refuel = Number(tokens[2])
                cars[car]["fuel"] += refuel;
                if(cars[car]["fuel"] > 75){
                    let neededFuel = cars[car]["fuel"] - 75;
                    cars[car]["fuel"] = cars[car].fuel - refuel;
                   refuel -= neededFuel;
                   cars[car]["fuel"] += refuel;
                }
                console.log(`${car} refueled with ${refuel} liters`);
            break;
            case "Revert":
                let kilometers = tokens[2];
                let oldKm = cars[car].mileage;
                cars[car]["mileage"] = oldKm - kilometers; 
                if(cars[car]["mileage"] <= 10000){
                    cars[car]["mileage"] = 10000;
                } else{
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }    
            break;
        }
        line = input.shift()
    }
    for(let [car,mileage,fuel] of Object.entries(cars)){
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    } 
}
needForSpeedIII(['3',   
    'Audi A6|38000|62',   
    'Mercedes CLS|11000|35',  
    'Volkswagen Passat CC|45678|5',   
    'Drive : Audi A6 : 543 : 47',    
    'Drive : Mercedes CLS : 94 : 11',    
    'Drive : Volkswagen Passat CC : 69 : 8',   
    'Refuel : Audi A6 : 50',    
    'Revert : Mercedes CLS : 500',    
    'Revert : Audi A6 : 30000',  
    'Stop'
    ])