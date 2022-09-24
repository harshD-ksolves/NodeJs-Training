/**
 * An array is a special variable, which can hold more than one value.
 */
const arr0=["Harshvarddhan","Deshmukh"];

/**
 * Array can be deifned using new Array.
 */

const arr1=new Array(1,2,3,4,5);


//Arry Methods


/**
 * Js Array have many prebuild ready to use functions.
 * Many of the Array.* methods are iterators.
 * 
 */


//Array.sort

const randArr=[13,12,11,12,11,11,10,10];

console.log(randArr.sort()); //prints  array with sorted items in ascending order.

//we can create our own sort criteria function.

let my_sort = (a,b) => b-a ;

console.log(randArr.sort(my_sort));//prints  array with sorted items in descending order.


//Array.forEach

/**
 * The forEach method will execute a function for every item in the array.
 * Each iteration step receives 3 arguments value, index, object.
 * It's similar to a for-loop but it looks cleaner
*/

const print =(item,index,object)=>{

    console.log(item+" has index: "+index);
}

randArr.forEach(print);// prints array items with it's index in defined format.

randArr.forEach(item => console.log(item)); //prints array items.



//Array.every

/**
 * Return value: boolean.
 * The method every will return true if the value of every single item in the array
 * satisfies the condition specified in its function argument.
*/

const condition1=value=>value>10;

const condition2=value=>value>=5;

let every=randArr.every(condition1);
console.log(every); // prints false. 

every=randArr.every(condition2);
console.log(every); //prints true.


//Array.some

/**
 * Return value: boolean
 * Similar to Array.every except it stops looping whenever it encounters a value that
 * evaluates to true.
 */
let some=randArr.some(condition1);
console.log(some);// prints True as first First value 13 satisfies the condition and immediately returns true without having to check the rest of the values.


//Array.filter

/**
 * Return value: new array consisting only of items that passed a condition.
 * 
 */
let filteredArray=randArr.filter(condition1);
console.log(filteredArray); // prints the array containing items that satifies the condition1.


//Array.map

/**
 * Return value: a copy of the original array with modified values. 
 */

let sqrArr= randArr.map((value)=>{
    return value*value;
})

console.log(sqrArr); //prints array containing squares of items of randArr array.



