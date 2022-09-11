function CommonElements(arr1, arr2){
    for( const el of arr1){
      if(arr2.includes(el)){
          console.log(el);
      }
    }
}
CommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
               ['Petar', 10, 'hey', 4, 'hello', '2'])