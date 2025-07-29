const fs = require('fs')


//readFileAsync
function readFileAsync(filePath){
    fs.readFile(filePath,(err,data)=>{
        const myPromise = new Promise((resolve,reject) =>{
            if(!err) resolve('it works') 
            else reject('error')
        })
            myPromise
                .then(function test(){
                    return(data.toString())
                })
                .catch(()=>{
                    return(err)
                })
    })
    return (data.toString())
}
// readFileAsync('example.txt')
// console.log('hello')

writeFileAsync
function writeFileAsync(filePath,content){
    fs.writeFile(filePath,content,(err)=>{
        const MyPromise = new Promise((resolve,reject)=>{
            if(!err) 
                resolve('working')
            else
                reject('not working')
        }) 
        MyPromise
            .then(()=>{
                console.log('Data written successfully!')
            })
            .catch(()=>{
                console.log('Data not written!')
            })
    })
}
// writeFileAsync('example.txt','test')

//processFiles
function processFiles(filePath){
    // let value = readFileAsync(filePath)
    // writeFileAsync(filePath,)
    // console.log('the upeercase convert done')
    // console.log(value)
}
processFiles('example.txt')




