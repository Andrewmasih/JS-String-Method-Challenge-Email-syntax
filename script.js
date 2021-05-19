
/* 1/ use the slice() and toLowerCase methids along with string concatenation on the 3 defined varibles to define and assign  value to the emailAdress varibleso it meets the requirements:  */

/* these varibles will be sliced and concatenated to form the email address */
let fullName = "Tony Starks";
let domainName = "StarksEnterprise";
let tld = "com";

// define the emailAddress varible here
// remember to use the slice() and toLowerCase() string method here 
let emailAdress = fullName.slice(0,4).toLowerCase()+"."+fullName.slice(5,14).toLowerCase()+"@"+domainName+"."+tld;

console.log (emailAdress);