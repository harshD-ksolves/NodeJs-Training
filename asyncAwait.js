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
const fun=async ()=>{
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

fun();

//Chaining promise with async/await.

const tenRaisedTo=(i)=>{
    let p=new Promise((resolve, reject)=>{
        if(typeof(i) != "number"){
            reject(`${i} is not a number`);
        }
        else{
            resolve(i**10);
        }
    });
    return p;
}

const asyncFun=async ()=>{
    let r=10;
    let res=await tenRaisedTo(r);
    console.log("First response:- "+res);

    r=20;
    res=await tenRaisedTo(r);
    console.log("Second response:- "+res);

    r=30;
    res=await tenRaisedTo(r);
    console.log("Third response:- "+res);
    return "Done";
}

asyncFun().then((r)=>console.log(r));
