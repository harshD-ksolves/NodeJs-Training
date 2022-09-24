/**
 * The String object is used to represent and manipulate a sequence of characters.
 */

//Initialising Strings.

const string1 = "String1";//using double quote.
const string2 = 'String2';//using single quote.
const string3 = `String3`;//using apostrophe.

let string4 = new String("String4");// using new String() .


//accessing characters.
console.log(string1.charAt(1));

console.log(string1[1]);

//concating two strings
string4=string1+string2;
console.log(string4);//prints String1String2

let string5=string1.concat(' ',string2);
console.log(string5);//prints String1 String2;

//String.length property.
/**
 * The length read-only property of a string contains 
 * the length of the string in UTF-16 code units.
 */

console.log(`length of string is ${string1.length}`);


//String builtin Methods.


//1.String.charAt()
/**
 * The String object's charAt() method returns a new string consisting of 
 * the single UTF-16 code unit located at the specified offset into the string.
 */
 console.log(string1.charAt(1));

//2.String.indexOf()
/**
 * The indexOf() method, given one argument: a substring to search for, 
 * searches the entire calling string,and returns the index of 
 * the first occurrence of the specified substring.
 */

console.log(string2.indexOf("i"));

//3.String.endsWith()

/**
 * The endsWith() method determines whether a string ends with 
 * the characters of a specified string,returning true or false as appropriate.
 */

console.log(string2.endsWith(2));//prints true

//4.String.slice()

/**
 * The slice() method extracts a section of a string 
 * and returns it as a new string, without modifying the original string.
 */

string4=string4.slice(string1.length);
console.log(string4);//prints String2

console.log(string4.slice(2,string4.length));//prints ring2.

//5.String.split()

/**
 * The split() method takes a pattern and divides a String 
 * into an ordered list of substrings by searching for the pattern, 
 * puts these substrings into an array, and returns the array.
 */

string4=string4.split('');
console.log(string4);//prints array containing characters of string string4.

//6.String.trim()

/**
 * The trim() method removes whitespace from both ends of a string 
 * and returns a new string, without modifying the original string.
 */
string5="    "+string5+" ";
console.log(string5);
console.log(string5.trim());
console.log(string5.trimEnd());
console.log(string5.trimStart());

