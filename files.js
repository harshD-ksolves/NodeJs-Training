const {writeFile,readFile,readFileSync, appendFile, truncate}=require('fs');

let lenData=0;// length of data in the file.
const filename='./simple.json';

/**
 * Function to write or replace content in the file.
 * @param {*} data to be write or replace data in the file.  
 */
const writeOrReplaceFunction= async(data)=>{
    
    
   writeFile(filename, data, (err) => {
        if (err) {
            console.log("writeOrReplace:- " + err);
            return;
        }
        else {
            console.log("\nData is written in file\n");
            lenData = data.length;
            return;
        }
    });
}
/**
* function to read data from the file.
*/
const readData= async()=>{
    readFile(filename, 'utf8', (err, res) => {
        if (err) {
            console.log("read:- " + err);
            return;
        }

        console.log("\nData read in the file:- ");
        console.log(JSON.parse(res.toString()));


    });
}

/**
 * Function to append or add given data at the end of file.
 * @param {*} data  to append or add at the end of file.
 */
const appendData= async (data)=>{
  appendFile(filename, data, (err) => {

        if (err) {
            console.log("append:- " + err);
            return;
        }
        else {
            console.log("\n new data has been appended at end of file ");
            lenData += data.length;
            return;
        }
    });
}
/**
 * FUnction to clear all file data from the file.
 */
const deleteAllData=async ()=>{
   truncate(filename, lenData, (err) => {
        if (err) {
            console.log("Delete:- " + err);
            return;
        }
        else {
            console.log("\n all data from the file has been cleared");
            return;
        }
    });
}


let obj0={
    id:0,
    name:"Harshvardhan",
    mobile:0987654321,
    email:"Abcd@xyz.com"
}


writeOrReplaceFunction(JSON.stringify(obj0));

deleteAllData();

let obj1={...obj0};
obj1.id=1;
obj1.name="New name";

appendData(JSON.stringify([obj1,obj0]));

readData();