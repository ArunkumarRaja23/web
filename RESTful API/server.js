const http = require('http');
const fs = require('fs'); //fileSystem

//creating local server
   const backend = http.createServer((request,response)=>{
            if(request.method ==='GET' && request.url === '/server'){
                   response.statusCode = 200;
                   response.setHeader('Content-Type','text/plain');
                   response.end("Welcome to the local server");
            } 
            else if(request.method==='GET' && request.url==='/demo'){
                  const readFile = ()=>{
                      return fs.readFileSync('content.txt','utf-8')
                  }
                  const data = readFile();
                  response.end(data);
            }     
   });
   backend.listen(5000,()=>{
    console.log("Server is running");
   })