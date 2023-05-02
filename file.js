import * as fs from'fs';


//read file
fs.readFile("./sample.text", "utf-8", (err,data)=>{
    if (err) {
        console.log(err)
    }else{
        console.log("file readsuccesfuly")
        console.log(data);
    }
})
