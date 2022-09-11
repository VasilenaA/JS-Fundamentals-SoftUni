function cats(input){
   class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
   }
   let catss = []; 

   for(let catData of input){
    let token = catData.split(" ");
    let catName = token[0];
    let catAge = token[1];
    let myCat = new Cat(catName, catAge);
    catss.push(myCat);
   }
   for(let myCat of catss){
    myCat.meow()
   }
}
cats(['Mellow 2', 'Tom 5'])