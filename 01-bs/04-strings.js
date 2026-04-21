const name = "neha"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('temple')
for(let i=0; i<= gameName.length ; i++)
{if(gameName[i] ==='e')

console.log(i);
}

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));
console.log(gameName.length);
console.log(gameName.charAt(2));

const n = gameName.substring(0,4)
console.log(n);

const another= gameName.slice(-3,6) //negative values
console.log(another)

const m = new String('        home      ')
console.log(m.trim());
   
const url= "http://abc.com/home%20world"

console.log(url.replace('%20','-'))


const Name = new String('sub-way-surf')
console.log(Name.split('-')); //covert to array





