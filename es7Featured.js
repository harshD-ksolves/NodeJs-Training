// 1.Array.includes()
const nums=[1,2,3,4];
nums.includes(2) ? console.log("Array contains value"):console.log("Array does not contain value");

//2.Exponential Operator(**)
const cubed=i=>i**3;
console.log("\nCube of 10 is "+cubed(10));

//3.Class properties
//now we can initialise class properties outside the constructor.
class Rectangle {
    constructor(length) {
        this.length = length;
    }
    breadth = 10; //This is valid.

    getArea(){
        console.log(`\nArea of rectangle is ${this.length*this.breadth}\n`);
        return;
    }
}
const rect=new Rectangle(12);
rect.getArea();
