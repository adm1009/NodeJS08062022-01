
// FILE SYSTEM MODULE
// console.log("hi");
// const fs = require("fs");
// fs.writeFileSync("read.txt","hi")
// fs.appendFileSync("read.txt"," hello")
// const bufferdata = fs.readFileSync("read.txt");
// const readabledata = bufferdata.toString();
// console.log(readabledata);
// fs.renameSync("read.txt","readwrite.txt")
// fs.unlinkSync("readwrite.txt");


//CHALLENGE FILE SYSTEM
// const fs = require("fs");
// fs.mkdirSync("abhi")
// fs.writeFileSync("abhi/bio.txt","abhijeet")
// fs.appendFileSync("abhi/bio.txt"," mulik")
// fs.readFileSync("abhi/bio.txt","utf-8");
// fs.renameSync("abhi/bio.txt","abhi/myBio.txt")
// fs.unlinkSync("abhi/myBio.txt")
// fs.rmdirSync("abhi")


//ASYNC FILE SYSTEM
// const fs= require("fs");
// fs.mkdir("abhi",(err)=>{
//     console.log("folder created");
// })
// fs.writeFile("abhi/read.txt","abhijeet mulik",()=>{
//     console.log("file created and data added successfully");
// })
// fs.readFile("abhi/read.txt","utf-8",(err,data)=>{
//     console.log(data);
// })
// fs.unlink("abhi/read.txt",(err)=>{
//     console.log("file deleted");
// })
// fs.rmdir("abhi",()=>{
//     console.log("folder deleted");
// })


//CHALLENGE ASYNC FILE SYSTEM
// const fs= require("fs");
// fs.mkdir("abhi",()=>{
//     console.log("folder created");
// })
// fs.writeFile("abhi/bio.txt","abhijeet",()=>{
//     console.log("data added successfully");
// })
// fs.appendFile("abhi/bio.txt"," mulik",()=>{
//     console.log("data append done successfully");
// })
// fs.rename("abhi/bio.txt","abhi/mybio.txt",()=>{
//     console.log("rename done successfully");
// })
// fs.readFile("abhi/mybio.txt","utf-8",(err,data)=>{
//     console.log(data);
// })
// fs.unlink("abhi/mybio.txt",(err)=>{
//     console.log("file deleted");
// })
// fs.rmdir("abhi",()=>{
//     console.log("folder deleted");
// })
