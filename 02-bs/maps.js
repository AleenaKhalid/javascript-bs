const coding = ["js", "ruby", "java", "python"]

const values = coding.forEach((item) => {
    console.log(item);
    // return item
} )

console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.filter((num) => num > 4)
//console.log(newNums)

const newNums = myNums.filter((num) => {
    return num > 4  //{return} is needed to return the value of
})
console.log(newNums)

const nums = []
myNums.forEach((num) => {
    if(num > 4){
        nums.push(num)
    }
})
console.log(nums)



const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbers = myNumbers.map((num) => num + 10)
console.log(newNumbers)


//+++++++++++          chaining       +++++++++

const n1= myNumbers
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num >= 40)
console.log(n1)




//++++++++++++++ reduce ++++++++++++++
const s = [1, 2, 3]
const mytotal = s.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 3 )

console.log(mytotal);

const total  = s.reduce( (acc, curr) => acc + curr ,0)
console.log(total)



const shop = [
    { itemname: "js course",
        price: 1000
    }, 

    { itemname: "py course",
        price: 999
    },

    { itemname: "data science course",
        price: 12000
    }
]
const price = shop.reduce((acc, item) => acc + item.price, 0)
console.log(price);