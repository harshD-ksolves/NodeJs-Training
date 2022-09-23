// Javascript loops


let a=[];

/**
 * for - loops through a block of code a number of times
 */
for(let i=12;i>0;i--){
    a.push(i);
}
console.log(a);
/**
 * for/in - loops through the properties of an object
 * 
 */
let sum=0;
for (let b in a){

    sum=sum+Number(b);

}
console.log("sum of array elements: "+sum);

/**
 * for/of - loops through the values of an iterable object
 */
console.log("\n");
const b="Harsh";
for (let c of b){
    console.log(c);
}

/**
 * while - loops through a block of code while a specified condition is true
 */

let l=b.length;
let rev="";
l=l-1;
while(l>=0){
    rev+=b[l];
    l--;
}
console.log(rev); //reverse the existing string.


/**
 * do/while - loop will execute the code block once, 
 * before checking if the condition is true, 
 * then it will repeat the loop as long as the condition is true.
 */

let i=1;
do{
    if(i%5==0){
        console.log(i);
    }
    i++;
}while(i<50); //prints number divisible by 5. 

