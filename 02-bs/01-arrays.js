const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

const arr= ["ali","ahmad","home","world","file","keys"]
const arr2= new Array(1,2,3,4)
console.log(arr2);

//array methods

// arr2.push(7);
// arr2.push(9);
// arr2.pop();

arr2.unshift(9)
//arr2.shift()
console.log(arr2.includes(9));
//console.log(arr2.indexOf(9)); //-1 value doesn't exist in arr2
console.log(arr2.indexOf(2)); // value 2 is on index1

const newArr = arr2.join()

console.log(arr2);
console.log(typeof newArr);


///////     slice, splice

console.log("A", arr2);
const myn1 = arr2.slice(1, 3)
console.log(myn1);

console.log("B ", arr2);

console.log(arr);
const myn2 = arr.splice(1, 3)
console.log("C ", arr); //modifies the original array
console.log(myn2); //returns the removed elements





////////////// methods





const marvelHeroes = ["ironman", "spiderman", "thor"]
const dcHeroes = ["superman", "batman", "flash"]
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes)

// const allHeroes =marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

const newheros = [...marvelHeroes,...dcHeroes] //drop ...
console.log(newheros)

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const newAr = another.flat(Infinity)
console.log(newAr);

console.log(Array.isArray("home"))
console.log(Array.from("home"))
console.log(Array.from({name: "home"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));




