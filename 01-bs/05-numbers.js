const score = 400
console.log(score);

const balance = new Number(200)  //type:Number[200]
console.log(balance);  

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //precision value decimal after 2 zero00
const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++ MATHS ++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //top value first
console.log(Math.floor(4.9)); //lowest value
console.log(Math.min(6,7,3,8));
console.log(Math.max(6,7,3,8));

console.log((Math.random()*10) + 1); // random 0-1 //+1 so that value is greater than 0
console.log(Math.floor(Math.random()*10) + 1); // random 0-1 //+1 so that value is greater than 0
 
 const min = 10;
 const max = 20;

 console.log(Math.floor(Math.random() * (max-min+1) + min))
 

