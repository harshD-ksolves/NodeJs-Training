/**
 * if variable is defined using 'var'  keyword inside a block scope,
 * it would be hoisted back to global scope!
 */
var a=1;
var b="Harsh";

/**
 * let keyword defines a varible but limits its use to the scope in which it was used.
 */
let c=1;

function ab(){
    let d=2; // variable b can  only accessed inside the function only.
    c=b;
}


/**
 * const keyword is same as let but once you can't change or re-assign it to a new value once defined.
 * so mostly they are used to assign const values so that they remain same after it's defined.
 */
const pi=3.14;
const a=['a','b','c'];


