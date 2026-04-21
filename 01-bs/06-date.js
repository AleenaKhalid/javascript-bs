let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);    //object

//let n_date = new Date(2023, 0, 23)
//let n_date = new Date(2023, 0, 23, 5, 9)
let n_date = new Date("01-14-2026")
console.log(n_date.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(n_date.getTime());
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); //start from index 0 so +1
console.log(newDate.getDay());

//`${newDate.getDay()}`

newDate.toLocaleString('default', {
    weekday: "long",
    
})



