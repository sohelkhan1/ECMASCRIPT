const evennumber =(number)=>{
    if(number%2===0){
        return "Number is even";
    }
    else{
        return "number is odd";
    }
}

console.log(evennumber(94));
console.log(evennumber(90));
console.log(evennumber(3));

const num =  25;

!(num % 2 ===0) && console.log ("Yes, this is a odd number");

num % 2 !==0 && console.log ("Yes, this is a odd number");
