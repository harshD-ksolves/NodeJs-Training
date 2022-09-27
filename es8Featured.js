//1.Object.entries()  
//is used to return an array of a
//given object's own enumerable property [key, value] pairs.

let fruits = {
    apple: 10,
    orange: 20,
    grapes: 30,
    pineapple: 40
};
for (let [k,v] of Object.entries(fruits)){
    console.log(k,v);
}


//2.Object.values 
//return an array of a given object's own enumerable property values.

const totalQuantity=Object.values(fruits).reduce((a,b)=>a+b);

console.log("\nToatal quantity of fruits:- "+totalQuantity);


//3.Object.getOwnPropertyDescriptors() 
//returns all own property descriptors of a given object.
fruits.allFruits=()=>{
    console.log(fruits);
}
console.log(Object.getOwnPropertyDescriptors(fruits));

//4.string.padEnd() and string.padStart() functions.

let str1="i".padStart(2,"h");
console.log("\npadStart:- "+str1);

let str2="h".padEnd(4,'i');
console.log("\npadEnd:- "+str2);

