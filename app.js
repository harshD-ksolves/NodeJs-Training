const f=require('./constVaribles');
const fs=require('./filesOperations');

let obj0={
    id:0,
    name:"Harshvardhan",
    mobile:0987654321,
    email:"Abcd@xyz.com"
}

console.log(f.filename);
fs.writeOrReplaceFunction(f.filename,JSON.stringify(obj0));

fs.deleteAllData(f.filename);

let obj1={...obj0};
obj1.id=1;
obj1.name="New name";

fs.appendData(f.filename,JSON.stringify([obj1,obj0]));

fs.readData(f.filename);