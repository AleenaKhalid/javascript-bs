 const accountId= 144553
 let accountEmail = "aleena@google.com"
 var accountPassword = "12345"
 accountCity = "lahore"
let accountState; //undefined declard but not initialized
// accountId = 2
accountEmail = "all@google.com"
accountPassword = "123455555"
accountCity = "karachi"

/*
prefer not to use var bcuz issue in block scope[{} and functional scope
*/
console.log(accountId);
console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])
