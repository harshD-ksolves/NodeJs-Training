
let area=0;
let perimeter=0;
let radius=23;

const Pi=3.14;

//Class to create circle object.
class Cirlce{

    constructor(radius=10){
        this.radius=radius;
    }

    getAllMeasures(){
        
        areaOfCircle(this.radius);
        perim(this.radius);

        const circle=getMeasuresOfCircle();
        
        const {area,perimeter}=circle;//Destructuring of an object.
        
        // multiline Strings using Template String.
        console.log(`\nThe area of circle of given radius ${this.radius} is ${area}
        \nThe permeter of circle of given radius radius ${this.radius} is ${perimeter}
        `); 
        
        return; 
    }
}

//arrow function to compute area of circle.
const areaOfCircle=(r)=>{
    area=Pi*r*r;
    return
}

//arrow function to compute perimeter of circle.
const perim=(r)=>{
    perimeter=2*Pi*r;
    return;

}

//function to return all the measures using object literal.
const getMeasuresOfCircle=()=>{
    return {
        area,
        perimeter,
        radius,
    }
}

const ci=new Cirlce(radius);//Measures of circle by given radius.
const cii=new Cirlce();//Measures of circle by default radius.

ci.getAllMeasures();

console.log("\n");

cii.getAllMeasures();
