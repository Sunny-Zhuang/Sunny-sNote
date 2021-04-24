const { resourceUsage } = require("process")

exports.getMime=function (extname){
    switch(extname){
        case '.html':
            return 'text/html'
        case '.css':
            return 'text/css'
        case '.js':
            return 'text/javascript'
    }
}

const fs = require('fs')

exports.getFileMime=function(extname){
    return new Promise((resolve,reject)=>{
        fs.readFile('./map/common.json',(err,data)=>{
            console.error('json',JSON.parse(data.toString()))
            let jsonObj=JSON.parse(data.toString())
            console.error('result',jsonObj[extname])
            resolve(jsonObj[extname])
        })
    })

}