for (let i = 0; i < 5; i++){
    const element = i;
    console.log("Hello world", element);
}

 for (let i = 0; i <=5; i++){
    console.log(`Outer loops value: ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner Loops Value: ${j} and i is ${i}`)
    }
 }




 let arr = ["flash", "superman", "batman"]
console.log(arr.length)
 for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
 }

 // break and continue

 for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
    
 }
 for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue; 
    }
    console.log(`value of i is ${index}`);
    
 }

 // while loop
 let i =0 ;
 while(i <= 10){
    console.log(`while loop value of i is ${i}`);
    i = i+2;
 }

 let myarr = ["flash", "superman", "batman"]
  let a = 0
   while (a < myarr.length){
    console.log(`Value of array is ${myarr[a]}`);
    a = a + 1;
   }


   //do while 
   let score = 11; 
   do{
    console.log(`Score is ${score}`)
    score++;
   }while(score <= 10);