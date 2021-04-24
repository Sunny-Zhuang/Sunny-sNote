var md5=require('md5')
console.error(md5(12345))

var fs= require('fs')
//find fs
fs.stat('./package.json',(error,data)=>{
    console.error('isfile',data.isFile())
    console.error('isfolder',data.isDirectory())  
})
//create folder
fs.mkdir('./css',()=>{})
//write in the file
fs.writeFile('./html/index.html','hello nodejs',()=>{})
//append content
fs.appendFile('./html/index.html','hello nodejs heihei',()=>{})
//read file
fs.readFile('./html/index.html',(err,data)=>{
    console.error(data.toString())
})
//read dir读取目录
fs.readdir('./html',(err,data)=>{
    console.error(data)
})
//rename file or move file
fs.rename('./css/aa.js','./css/index.css',()=>{})
//deletem目录
fs.rmdir('./aaaa',()=>{})
//delete file
fs.unlink('./aaaa/index.js',()=>{})

