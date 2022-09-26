
function square(a, b) {
  return new Promise((resolve,reject) => {
    if(typeof(a)!="number" || typeof(b)!="number"){
        reject("Invalid input please provide only integers");
    }
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

//Handling asynchronus functionality using then and catch.
square(1, 'harsh')
  .then((res) => {
    console.log("\nResult using then/catch:- "+res);
  })
  .catch((err) => console.log("\nResult using then/catch:- "+err));

//Handling asynchronus functionality using async/await.

(async()=>{
    console.log("\nResult using async/await:- "+ await square(23,34));
  })();