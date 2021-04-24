const fs = require('fs')
var readStream = fs.createReadStream('./input.txt')

var count = 0;
var str='';
readStream.on('data',(data)=>{
    count++;
    str+=data
})
readStream.on('end',()=>{
    console.error('str',str)
    console.error('count',count)
})

var writeStream = fs.createWriteStream('./input.txt')
writeStream.write('aaaaaaaaaaaa')

writeStream.end()
writeStream.on('finish',()=>{
    console.error(111)
})

//管道流， 从一个文件读，输入到另一个文件
readStream.pipe(writeStream)