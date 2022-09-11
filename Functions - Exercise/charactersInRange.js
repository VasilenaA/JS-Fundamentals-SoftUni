function charactersInRange(chOne,chTwo){
  let startChar = Math.min(chOne.charCodeAt(0), chTwo.charCodeAt(0));
  let endChar = Math.max(chOne.charCodeAt(0), chTwo.charCodeAt(0));

  let charsInRangeArray = [];
  for(let current = startChar +1; current < endChar; current++){
      let currentChar = String.fromCharCode(current);
      charsInRangeArray.push(currentChar);
  }
  console.log(charsInRangeArray.join(" "))
}
charactersInRange('a','d')