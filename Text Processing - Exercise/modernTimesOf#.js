function modernTimesOf(input){
    let sentence = input.split(' ');

    for(let word of sentence){
        if(word.startsWith('#') && word.length > 1){
           let flag = true;
           let wordTL = word.toLowerCase();
           
           for(let i = 0; i < word.length; i++){
            if(wordTL.charCodeAt(i) < 97 || wordTL.charCodeAt(i) > 122){
               flag = false;
               break;
            }
           }
        if(flag){
          console.log(word.substring('#'));
         }
        }    
    }
}
modernTimesOf('Nowadays everyone uses # to tag a #special word in #socialMedia')