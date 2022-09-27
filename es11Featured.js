//1.BigInt.
const num=BigInt("11111111111111111111111111111111111111111111111111111");
console.log(num);

//2.Dynamic import
//Now,with Javascript, we can import modules dynamically through variables.
 async()=>{
    const module=await import('callbackHell.js');
    console.log("\nasync module: "+module+"\n")
 } 

 import('./callbackHell.js').then((module)=>{
       console.log(module);
 });

 //3.Optional Chaining.
 const user={
    name:"Harshvardhan Deshmukh",
    age:23,
    addres:{
        city:"Solapur",
        state:"Maharashtra",
        country:"India"
    }
 }

 const mobileNo=user?.mobileNo;
 console.log(mobileNo);
 
 //4.Nullish coalescing operator(??)
 /**
  * Nullish coalescing operator (??) is a new JS operator allowing 
  * basically to provide a "default value" when the accessed 
  * one is either null or undefined.
  */

 const basicVal="Harsh";
 const nullish=null;

 const a=basicVal ?? "Example";
 console.log(a);

 const b=nullish?? "Example";
 console.log(b);


 //5.Promise.allSettled
 /**
  * The Promise.AllSettled attribute allows you to perform 
  * a conditional that observes whether all promises 
  * in an array have been resolved.
  */
  const arrOfPromises=[
    Promise.resolve("Resolved 1"),
    Promise.reject(0),
    Promise.resolve("Resolved 2")
    ];

Promise.allSettled(arrOfPromises).then((result)=>{
    console.log("\nAll promises in an array has been resolved");
}).catch(e=>console.log(e));


