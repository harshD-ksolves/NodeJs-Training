/**
 * The Set object lets you store unique values of any type, 
 * whether primitive values or object references.
 * 
 * Value equality is based on the SameValueZero algorithm. 
 * It used to use SameValue, which treated 0 and -0 as different.
 * 
 */

/**
 * empty set.
 */
const mySet=new Set();

//built in Set methods.

// 1.Set.add()

/**
 * The add() method inserts a new element with a specified value in to a Set object, 
 * if there isn't an element with the same value already in the Set.
 */

mySet.add(1);
mySet.add(2).add("Harsh");

//2.Set.delete()

/**
 * The delete() method removes a specified value from a Set object,
 *  if it is in the set.
 */

mySet.delete("Harsh");

mySet.add("Harshvardhan");

//3.Set.entries()
/**
 * The entries() method returns a new Iterator object that contains an
 *  array of [value, value]for each element in the Set object, 
 * in insertion order. 
 */
const itr1=mySet.entries();
for(const b of itr1){
    console.log(b);
}

//4.Set.forEach()
/**
 * The forEach() method executes a provided function once 
 * for each value in the Set object, in insertion order.
 */

const setForeach=(value1,value2,set)=>{
    typeof(value2)=="number"?console.log("number"):console.log("not a Number");
}
mySet.forEach(setForeach);

//5.Set.has()
/**
 * The has() method returns a boolean indicating whether 
 * an element with the specified value exists in a Set object or not.
 */


if(mySet.has(1)){
    console.log(mySet)//prints set as the condition is true.
}
console.log(mySet.has("harsh"));//prints false.


