const user = {
    username: "john",
    price : 200,

    welcomeMessage : function() {
       console.log(`${this.username} , WELCOME TO WEBSITE`) //we use backticks to use template literals and ${} to access the value of username property

       //template literals are a way to embed expressions in strings, they are enclosed by backticks (``) instead of single or double quotes. They allow us to include variables and expressions inside the
       //  string without having to concatenate them with + operator.

//console.log(this) 

    }

    //litral means a fixed value, in this case the object is a literal because it is defined with a fixed value. We can also define objects using constructor functions or classes, but in this case we are using an object literal.

}

//browser -> global object is window, node -> global object is this is empty {}

user.welcomeMessage() 
user.username = "sam"
user.welcomeMessage() 
console.log(this) //in global scope, this refers to the global object, which is window in browsers and global in Node.js. In strict mode, this will be undefined



// function test(){
//     let username = "john";
//     console.log(this.username); // undefined
// }

// test()


// const add = (num1, num2) =>{
// return num1 + num2
// }

const add = (num1, num2) => ( num1 + num2 )
//implicit return, we can omit the return keyword and the curly braces when the function body is a single expression. The value of that expression will be returned automatically.
const add1 = (num1, num2) => ( {name :"sam" }) // object  return


console.log(add(3, 4))

// const myArray = [1, 2, 3, 4, 5]
// myArray.forEach(function() {})
// myArray.forEach(() =>( console.log("hello"))) 



// immediately invoked function expression (IIFE) is a function 
// that is defined and executed immediately after its creation. 
// It is often used to create a new scope and avoid polluting the global namespace.

(function chai(){
    // named iffe
    console.log(`hello`);
}) ();


( () => {
console.log(`hello1 ${uname}`);
} )("doe")





