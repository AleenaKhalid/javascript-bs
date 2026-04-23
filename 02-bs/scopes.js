let  a = 5;
const b = 3;
// var c =6;

if(true) {
let a = 10;
const b = 20;
console.log("INNER: ", a ); 
}

//console.log(a)

function one(){
    const username = "john"

    function two(){
        const website = "youtube"
        console.log(username) //closure access to outer function 
    }
        two()
}
one ()

if(true){
const username = "sam"
if(username === "sam"){
    const website = " youtube"
    console.log(username + website)
}
  //console.log(website); 
}

// ++++++++++++++++++++++++++++ 

function addone(num){
    return num+1
}
addone(4)

const addtwo = function(num){
    return num+2
}

addtwo(5)
