// 1. Array.flat()
//The flat() method enables you to easily concatenate.
//all sub-array elements of an array.
let arr = [10, [20, [30]]];
console.log(arr.flat());
console.log(arr.flat(1));
console.log(arr.flat(2));

//2.Array.flatMap()
//flatMap() method combines map() and flat() into one method.
arr = [[10], [20], [30]];
console.log("\n");
console.log(arr.flatMap((value) => [value ** 2]));

//3. Object.fromEntries()
//This static method allows easily to transform a list of key-value
//pairs into an object
arr = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
];
console.log("\n");
console.log(Object.fromEntries(arr));

//4.String.trimStart() and String.trimEnd()
const str = "  Harshvardhan  ";
console.log("\n");
console.log(str.trimStart());
console.log(str.trimEnd());

//5.Optional catch binding
//this allows to omit the catch binding and its surrounding parentheses
try {
  date.now();
} catch {
  console.log("\nError");
}
