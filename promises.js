/**
 * Promises can be used to solve the callback hell problem.
 * A Promise object provides a pattern for checking whether an action fails or succeeds. 
 * Then, if it does succeed, it returns another promise.
 */

//Example 1

let name=1;
/**
 * @param {Function}resolve 
 * The resolve() method indicates that the promise 
 * has been successfully fulfilled and contains the return value.
 * 
 * @param {Function}reject 
 * The reject() method returns a Promise object that 
 * is rejected with a given reason.
 */
const p=new Promise((resolve,reject)=>{
    if(typeof(name) !="string"){
        reject("\nInvalid String");
    }
    else{
        resolve(name);
    }   
});

p.then((res) =>{
    console.log("Response:- "+res);
}).catch(e=>console.log(e));


//Promise with then/catch/finally.
const areaOf=(l,w)=>{
    return l*w;
}

const promise=new Promise((resolve,reject)=>{
    const area=areaOf(4,2);

    if(area>6){
        resolve(area);
    }
    else{
        reject("\narea is less than desired value");
    }
});

promise.then((res)=>{
    console.log(res);
    return "\nArea is complient with specification\n"
})
.then((res)=>{
    console.log(res);
})
.catch(e=>console.log(e))
.finally(()=>console.log("\nPromise is setteled\n"))


//Promise.all()

const promise1 = "Promise";
const threat="Threat";
const resol=Promise.resolve("Resolved");

const arr=[promise1,threat,resol];

Promise.all(arr).then((res)=>{
    console.log(res);
})
.catch(e=>console.log(e))
.finally(()=>console.log("Finally"));
  
module.exports={promise1,arr};