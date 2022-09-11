function EchoType(n){
    let type = typeof(n);
    console.log(type); 
    if(typeof(n) === "string"){
        console.log(n);
    } else if(typeof(n)=== "number"){
        console.log(n);
    } else{
        console.log("Parameter is not suitable for printing");
    }
}
EchoType(null)