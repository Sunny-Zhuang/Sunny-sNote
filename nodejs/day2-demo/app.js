const http = require('http')
const fs = require('fs')
const common = require('./module/common.js')
const path=require('path')

http.createServer((req,res)=>{
    let pathurl = req.url;

    if(pathurl!=='favicon.ico'){
        console.error('./static'+pathurl)
        fs.readFile('./static'+pathurl,async (err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html;charset="utf-8"'})
                res.end('error',err)
            }
            let mime = await common.getFileMime(path.extname(pathurl))
            res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'})
            res.end(data)
        })
    }

}).listen(3000)