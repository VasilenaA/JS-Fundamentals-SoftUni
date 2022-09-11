function revealWords(words, sentence){
  let wordsToReveal = words.split(", ");
  let sentenceArr = sentence.split(" ");
  let resultSentence = '';

  for(let word of wordsToReveal){
    for(let el of sentenceArr){
        if(el.includes('*') && el.length === word.length){
            sentence = sentence.replace(el, word);
        }

    }
  
  }
    console.log(sentence)
}
revealWords('great, learning',

'softuni is ***** place for ******** new programming languages')