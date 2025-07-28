const fs = require('fs')


//readFileAsync
function readFileAsync(filePath){
    fs.readFile(filePath,(err,data)=>{
        const myPromise = new Promise((resolve,reject) =>{
            if(!err) resolve('it works') 
            else reject('error')
        })
            myPromise
                .then(()=>{
                    console.log(data.toString())
                })
                .catch(()=>{
                    console.log(err)
                })
    })
}
readFileAsync('example.txt')
console.log('hello')

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
writeFileAsync('example.txt','test')

//processFiles
function processFiles(filePath,content){

}