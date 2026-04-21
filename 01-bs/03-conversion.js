let score = "56abc"
console.log(typeof score);
console.log(typeof (score)); //method

//const {score} = req.body //front end user value

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN  =not a number
//true = 1; false = 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);




// **************************** operations**********

let value = 3 
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3)

console.log(str3)


////////////////////////////////////////////////
//arrrays objects

const heroes = ["superman", "batman", "spiderman"];
let myObj = {
    name : "aleena",
    id: 123
}
const myFunction = function(){
console.log ("hello world")
}


