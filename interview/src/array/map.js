export function map(array,callback){
    console.error('call custom map')
    var arr=[]
    for(let i=0;i<array.length;i++){
        const result=callback(array[i],i)
        arr.push(result)
    }
    return arr
}