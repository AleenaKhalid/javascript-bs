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