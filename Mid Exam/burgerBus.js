function burgerBus(input){
    let numberOfCities = Number(input.shift());
    let cityCount = 0; 
    let totalProfit = 0;
    for(let i = 0; i < input.length; i= i+3){
        let profit = 0;
        let cityName = input[i];
        let ownersIncome = Number(input[i+1]);
        let ownersExpenses = Number(input[i+2]);
      cityCount++;
        if(cityCount ==3){
            ownersExpenses =ownersExpenses + 0.5 * ownersExpenses;   
         }
        if(cityCount ==5){
            ownersIncome = ownersIncome - 0.1 * ownersIncome;
        }
       
        profit = ownersIncome - ownersExpenses;
        totalProfit += profit;
        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`) 
        
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])

