const http = require("http");

const server = http.createServer((req,resp)=>{
    resp.end("homepage")
});

server.listen(8000,"",()=>{
    console.log("listening on 8000");
})