// Task 1 : Speed run !!

//sum(numbers) : a function that takes an array of numbers and returns their sum.
function sum(numbers){
    let sum = 0
    for (const number of numbers) {
        sum+=number
    }
    return sum
}
// console.log(sum([4, 2, 7]))



//countEven(numbers) : a function that takes an array of numbers and returns the count of even numbers.
function countEven(numbers) {
    let numsOfEven = 0
    for (const number of numbers) {
        number%2==0 && numsOfEven++
    }
    return numsOfEven
}
// console.log(countEven([4, 2, 7]))



//double(numbers) : a function that takes an array of numbers and returns a new array where each element is doubled
function double(numbers){
    let numbersDoubled= []
    for (const number of numbers) {
        numbersDoubled.push(number*2)
    }
    return numbersDoubled
}
// console.log(double([4, 2, 7]))

// Task 2 : The pair of socks
// function sockMerchant(socks) {
//     let pairsOfSocks = 0
//     let pairsOfSocksIndex = []
//         for (let i = 0; i < socks.length-1; i++){
//             for (let j = 1; j < socks.length; j++) {
//                 if(i!=j){
//                     if (socks[i]==socks[j]) {
//                     if (pairsOfSocksIndex.includes(i)||pairsOfSocksIndex.includes(j)) {
//                     }else{
//                         pairsOfSocks++
//                         pairsOfSocksIndex.push(i,j)
//                     }
//                 } 
//                 }
//             }
//         }    
//         return pairsOfSocks
//     }
function sockMerchant(socks) {
    let pairsOfSocks = 0
        for (let i = 0; i < socks.length; i++){
            for (let j = i+1; j <= socks.length; j++) {
                        if (socks[i]==socks[j]) {
                            pairsOfSocks++
                            socks.splice(j,1)
                            socks.splice(i,1)
                        }
                        if (socks[i]==socks[j]) {
                            pairsOfSocks++
                            socks.splice(j,1)
                            socks.splice(i,1)                        
                        }
            }
        }
                return pairsOfSocks
    }
           


console.log(sockMerchant([2, 2, 3, 4, 5, 8, 8, 7, 7]))