function formatGrade(grade){
    let desc;
    let formattedGrade = grade.toFixed(2);

   if(grade < 3.00){
       desc = "Fail";
       formattedGrade = 2;
   } else if(grade < 3.50){
       desc = "Poor";
   } else if(grade < 4.50){
    desc = "Good";
   } else if(grade < 5.50){
     desc = "Very good";
   } else if(grade >= 5.50){
     desc = "Excellent";
   }
   console.log(`${desc} (${formattedGrade})`);
}
formatGrade(3.33)