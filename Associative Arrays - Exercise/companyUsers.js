function companyUsers(input){
    let result = {};
    for(let line of input){
        let[companyName, id] = line.split(' -> ');
        if(!result.hasOwnProperty(companyName)){
            result[companyName] = [];
        }
        if(!result[companyName].includes(id)){
            result[companyName].push(id);
        }
    }

    let sortedCompanies = Object.keys(result);
    sortedCompanies.sort((a,b) => 
    a.localeCompare(b));
    for(let company of sortedCompanies){
        console.log(company);
        for(let emp of result[company]){
            console.log(`-- ${emp}`)
        }
    }
}
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])