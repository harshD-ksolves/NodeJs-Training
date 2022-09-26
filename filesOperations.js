const {writeFile,readFile,readFileSync, appendFile, truncate}=require('fs');

let lenData=0;// length of data in the file.


/**
 * Function to write or replace content in the file.
 * @param {*} data to be write or replace data in the file.  
 */
const writeOrReplaceFunction= (filename,data)=>{
    
    
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
const readData= (filename)=>{
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
const appendData= (filename,data)=>{
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
const deleteAllData= (filename)=>{
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


module.exports={
    writeOrReplaceFunction,
    readData,
    appendData,
    deleteAllData
}