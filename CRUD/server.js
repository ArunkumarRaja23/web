//CRUD operation performed in local filesystem
const fs =require('fs');

// Creating file
const createFile = ()=>{
    //inclue html file
    const htmlFile = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello html file</h1>
</body>
</html>
    
    `
     fs.writeFileSync('Data.html',htmlFile,'utf-8');
     console.log("Created sucessfully");

};

//reading file
const readFile = ()=>{
     const data = fs.readFileSync('Data.txt' , 'utf-8'); 
     console.log(data);
}

//update file
  
const updateFile = ()=>{
        fs.appendFileSync('Data.txt' , 'This is updated data' , 'utf-8');
        console.log("updated");
}

//deleting file 
    const deleteFile = ()=>{
        fs.unlinkSync('Data.txt');
        console.log("file deleted");
    }


 //deleteFile();
//updateFile();
//readFile();
createFile();