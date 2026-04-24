// if
const isLoggedIn = true;
if (2==='2'){
       //console.log("User is logged in");
       console.log("executed");
}  
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power is ${power}`)
}
   
const balance = 1000
if(balance > 500) console.log("test")

    if(balance > 500){
        console.log("less than")
    } else if (balance < 750){
        console.log("greater than")
    }
const userLoggedIN = true
const debitcard = true
if(userLoggedIN && debitcard || 2==2){
    console.log("you can buy")
}




    // switch (key){
    //     case value: 
    //         break;

    //     default:
    //         break;
    // }
    const month = 3
switch (month){
    case 1: 
      console.log("january");
      break;

    case 2: 
      console.log("february");
      break;

    case 3: 
      console.log("march");
      break;

    default : 
        console.log("invalid month");
        break;
}

const userEmail = "sam@gmail.com" // "" is falsy value, if we set userEmail to "" then it will be falsy and the else block will be executed. If we set userEmail to any non-empty 
             // = []  is also a truthy value, if we set userEmail to [] then it will be truthy and the if block will be executed. If we set userEmail to null or undefined then it will be falsy and the else block will be executed.
if(userEmail){
    console.log("got user email");
} else {
    console.log("no email found")
}

//falsy values 
// 0 , "" , null ,-0 , bigint 0n , undefined , NaN

//truthy values
// "0", "false", " ", [], {}, function(){}, true, 1, -1, Infinity, -Infinity

const u = []
if(u.length === 0){
console.log("array is empty")
}
const obj = {}
if (Object.keys(obj).length === 0){  //keys return an array than apply length property 
    console.log("object is empty")
}




//Nullish coalescing operator (??) is a logical operator that returns the right-hand side operand
//  when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.
//  It is often used to provide a default value for
//  a variable that may be null or undefined.


let  val1;
val1 = 5 ?? 10;
console.log(val1);



//ternary operator 
// condition ? expressionIfTrue : expressionIfFalse
const age = 18
age >=18 ? console.log("you are an adult") : console.log
("you are a minor") 