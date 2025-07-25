//Linear Search : Implement the basic search algorithm to find a specific element.
let arr = [ 40 , 100 ,  6 , 25 , 10 ]


function linearSearch(arrOfNumbers,numToLook){
    for (let i=0;i<arrOfNumbers.length;i++) {
        if(numToLook == arrOfNumbers[i]){
            return i
        }
    }
    return null
}

// console.log(linearSearch(arr,1))

// Bubble Sort : Implement a basic yet fundamental sorting algorithm.
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                
            }
        }
    }
    return arr
}
// let sortedArray = bubbleSort(arr)
// console.log(sortedArray)


//Binary Search : Develop an advanced search algorithm suitable for sorted arrays.
function binarySearch(arrOfNumbers,numToLook) {
    arrOfNumbers.length%2 == 0 && arrOfNumbers.push(undefined)
    let slices = arrOfNumbers.length
    for (let i = 0; i < arrOfNumbers.length; i++) {
        if(arrOfNumbers[slices]==numToLook){return slices}
        if (numToLook > arrOfNumbers[parseInt(slices)]) {
            slices = parseInt((slices+arrOfNumbers.length)/2)
        }else{
            slices = parseInt((slices)/2)
        }
    }
    return `the number ${numToLook} not exist`
}
let arrayTest = [ 6 , 10 , 25 ,40, 50 , 100 , 200]
console.log(binarySearch(arrayTest,6))
console.log(binarySearch(arrayTest,10))
console.log(binarySearch(arrayTest,25))
console.log(binarySearch(arrayTest,40))
console.log(binarySearch(arrayTest,50))
console.log(binarySearch(arrayTest,100))
console.log(binarySearch(arrayTest,200))


