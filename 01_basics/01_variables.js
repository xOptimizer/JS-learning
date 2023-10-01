const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345" // var is not used due to a problem that is js did not knew about scope during initial days that was resolved by const and let 
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "shagd@hg.com"
accountPassword = "2112"
accountCity = "Roorkee" // this is possible but should not be used
let accountState;

console.log(accountId);
/*
 Prefer not to use var 
 beacuse of issue in block scope and functional scope  
*/



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])