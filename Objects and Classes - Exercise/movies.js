function movies(input){
   let movie = [];

 input.forEach((el)=>{
    if(el.includes('addMovie ')){
        let movieName = el.replace('addMovie ','');
        movie.push({name:movieName});
    }else if(el.includes('directedBy')){
        let movieInfo = el.split(' directedBy ');
        let name = movieInfo[0];
        let director = movieInfo[1];
        movie.forEach(movieName => {
            if(movieName.name === name){
                movieName.director = director;
            }
        });
    }else if(el.includes('onDate')){
        let [name, date] = el.split(' onDate ');
        movie.forEach(movieName => {
            if(movieName.name === name){
                movieName.date = date;
            }
        });
    }
});

   movie.forEach(movieName => {
    if(movieName.name && movieName.director && movieName.date){
        console.log(JSON.stringify(movieName));
    }
   });
}
movies([   'addMovie Fast and Furious',    
    'addMovie Godfather',   
    'Inception directedBy Christopher Nolan',   
    'Godfather directedBy Francis Ford Coppola',    
    'Godfather onDate 29.07.2018',   
    'Fast and Furious onDate 30.07.2018',   
    'Batman onDate 01.08.2018',    
    'Fast and Furious directedBy Rob Cohen'    
    ])