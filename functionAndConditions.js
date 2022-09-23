/**
 * In JavaScript there are two types of functions: the standard function that can be
 * defined using function keyword and an arrow function ()=>f{} added later in ES6.
 */


/**
 * Standard Functions.
 */
let i=0;

//assigning function to variable.
let a=function(b){
    if(typeof(b)!="number"){ //checks if passed argument is a number or not
        console.log("Invalid argument!");
        return;
    }

    if(b>=50 && b%10==0){
        console.log(b); //prints number if it is greater than or equal to 50 and divisible by 10.
        return;
    }
    else if( b>40 || b===45){
        console.log(b+" is greater than 40 or equal to 45");
    }
    else{
        console.log(b+" is less than 40");
    }
}

a("hi");
a(10);
a(60);
console.log("\n");

// function used as a setTimeout event callback.
// this function is executed after 1 second.
setTimeout(function(){
    console.log("Hello");
},1000);


/**
 * Arrow functions.
 * 
 */

const f=(a,b)=>{
    if(a>b){
        console.log(a+" is greater than "+b);
    }
    else if(b==a){
        console.log(b +"is equal to "+a);
    }
    else{
        console.log(b+" is greater than "+a);
    }
}
f(23,45);
f(34,78);
console.log("\n");

//Ternery operator condition

let g=(s)=>{

    const q="enter more than one character";
    const w="string character must not exceed mor than 11 characters";
    
    if(typeof(s)!="string"){
        console.log("Invalid argument!");
        return;
    }
    const t= s.length<2 ? q:s.length>=12?w:s+" is correct input";
    console.log(t);
}
g(12);
g(true);
g("h");
g("Harshvardhan");
g("Harsh");


