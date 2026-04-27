//for of 
// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
console.log(`Each char is ${greet}`);
}

//++++++++++++++++++++  maps 

const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200); 


const map = new Map()
map.set('It' ,"Rome")
map.set('USA' ,"United States")
map.set('Fr' ,"France")
//console.log(map);

for (const [key, value] of map) {
   console.log(key,':-', value);
}



// const myObject = {
//    'game1': 'NFS', 
//    'game2': 'Call of Duty'
// }
// for (const [key,value] of myObject){
//    console.log(key,':-', value);

// }




//+++++++++++++++++ for in +++++++++++++++


const myObject2 = {
   js: 'JavaScript' , 
   cpp: 'C++',
   rb : 'Ruby',
   swift: 'Swift'

}
for (const key in myObject2) {
   console.log(`${key}: shortcut is ${myObject2[key]}`);
}

const prog = ["js", "cpp", "rb", "swift"]
for (const key in prog) {
   console.log(prog[key]);
}



// for in is used to iterate over the properties of an object,
//  while for of is used to iterate over the values of an iterable object (like arrays, strings, maps, etc.).


// +++++++++++++++++++++++++++++++  for each

const coding = ["js", "ruby", "python", "java","cpp"]
// coding.forEach(function (val1){
//    console.log(val1)
// })

coding.forEach((item) => {
   console.log(item)
} )



// function print(item)
// {
//    console.log(item)

// }
// coding.forEach(print)

coding.forEach( (item, index, arr) => {
   console.log(item, index, arr)
})

const myCoding = [
   {
      languageName: "Javascript",
      filename: "js"
   },
   {
      languageName: "python",
      filename: "py"
   },
   {
      languageName: "java",
      filename: "java"
   }
]
myCoding.forEach((item) =>{
console.log(item.languageName)
} )