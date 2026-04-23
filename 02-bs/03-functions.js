// let n = Math.floor(Math.random()*10) + 1
// for (let i = 1; i <=20; i++) {
//     console.log(n + "  X  " + i  + " = " + n*i);  
// }

function say(){
    console.log("Hello world");
}
//say() //exectute reference of function

function add(num1, num2){
//   console.log(num1 + num2)
let result = num1 + num2
return result;
console.log("This will not be executed") //after return statement no code will be executed

}

//add(3 , "a") 
const result = add(3, 4)
console.log("Result: ", result);

function loginUserMessage(username = "Guest"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in.`;
}
    //console.log(loginUserMessage("josh"))
    console.log(loginUserMessage()) //undefined. because username is undefined
 
    function calculateCartPrice(...num1){//rest parameter to take multiple arguments as an array
        return num1

    }
    //console.log(calculateCartPrice(200))
    console.log(calculateCartPrice(200, 400, 500))


    const user = {
        name : "john",
        price  : 200
    }
    function handleObject(anyobj){
console.log(`Username is ${anyobj.name} and price is ${anyobj.price}`)
    }
    handleObject(user)

    // handleObject({
    //     name : "sarah",
    //     price : 300
    // })

    const myarr = [1, 2, 3, 4, 5]
    function returnarray(getarr){
        return getarr[1];
    }
    //console.log(returnarray(myarr));
    console.log(returnarray([200,300,400,500]));


