/**
 * Objects can be initialized using new Object(), Object.create(),
 * or using the literal notation (initializer notation).
 * 
 */

//Empty Object.

const obj={};

obj.a="Simple Object";

//we can define function as a propert of an object.
obj.b=(arg)=>{
    return typeof(arg)!="number"?"Invalid argument":arg<1?"number must be greater than 0":arg%2==0?"even":"odd";
}

const person={
    name:"Harshvardhan",
    dob:"2 May",
    bday:function(){
        console.log(this.name+"'s birthday is on "+this.dob);
    }
}


//Accessing Object Properties.
//You can access object properties in two ways.

console.log(person.name);
//or
console.log(person["dob"]);

//Accessing Object methods
let e=obj.b("harsh");
console.log(e);//prints invalid input.

e=obj.b(34);
console.log(e);//prints even.

e=obj.b(11);
console.log(e);//prints odd.

person.bday();


//You can store objects as an property of an object.

obj.c=person;// assigns copy an current object.
console.log(obj);

//accessing object inside an object is same.
console.log(obj.c.name);//prints value of name

// Computed property names and values.
let i = 0;
const a={
   [`${++i}`]: i*i,
   [`${++i}`]: i*i,
   [`${++i}`]: i*i,
   [`${++i}`]: i*i,
}
console.log(a);// prints object with key as number and value as square of that key.








