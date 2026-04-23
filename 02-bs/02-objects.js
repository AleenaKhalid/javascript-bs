//const tinderUser = new Object()
const user={}

const tinderuser = {
id : 1234,
name : "John",
isLoggedIn : true,
email: "some@gamil.com",
fullname : {
    userfullname : {
        firstname : "John",
        lastname : "Doe"
    }
}
}
console.log(tinderuser.fullname?.userfullname);
const obj1 = {1: "a", 2  : "b"}
const obj2 = {3: "a", 4  : "b"}

const obj3 = {obj1 ,obj2}
const obj4 = Object.assign({}, obj1, obj2) //{} for many values  target object, obj1 and obj2 source objects copies to target

//console.log(obj3);
//console.log(obj4);

const obj5= {...obj1, ...obj2} //spread operator for many values  target object, obj1 and obj2 source objects copies to target
console.log(obj5);

const users = [
    {
        id : 1,
        email : "some@gmail.com"
    },

      {
        id : 2,
        email : "some@gmail.com"
    },
]
users[1].email
console.log(tinderuser);

//methods

console.log(Object.keys(tinderuser)) //returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
console.log(Object.values(tinderuser)) //returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
console.log(Object.entries(tinderuser)) //returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(tinderuser.hasOwnProperty('isLoggedIn')) //returns a boolean indicating whether the object has the specified property as

const course =  {
    courseName : "js",
    price : "999",
    courseInstructor : "aleena"
}
//course.courseInstructor 
const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor: instructor} = course // object destructure and rename to instructor
console.log(instructor)

// const navbar = ({company}) =>  {

// }
// navbar(company = "Google")
