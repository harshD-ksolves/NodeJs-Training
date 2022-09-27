let i=6;
let t=2000;
let promise1 = new Promise((resolve, reject) => {
    setTimeout(
        () =>{
            if(i>5){
                resolve(i**5);
            }
            else {
                reject("Rejected by promise 1");
            }
            
        } 
        , t)
  });

  let promise2 = new Promise((resolve, reject) => {
    setTimeout(
        () =>{
            if(i>5){
                resolve(i**5);
            }
            else {
                reject("Rejected by promise 2");
            }
            
        } 
        , t)
  });
const f=async ()=>{
    console.log("Before promise1");

    //Try and catch block to handle the error thrown by reject method.
    try {
        let res=await promise1;
        console.log("\nAfter promise 1 is resolved");
        console.log(res);

        i=3;
        t=1000;
        res=await promise2;
        console.log("\nAfter second promise1 is resolved");
        console.log(res);
    } 
    catch (error) {
        console.log("error caused by reject method:- "+error)
    }
}
f();
