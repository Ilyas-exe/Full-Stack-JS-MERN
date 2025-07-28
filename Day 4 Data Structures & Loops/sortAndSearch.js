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
    let center = arrOfNumbers.length
    for (let i = 0; i < arrOfNumbers.length; i++) {
        if(arrOfNumbers[center]==numToLook){return center}
        if (numToLook > arrOfNumbers[parseInt(center)]) {
            center = parseInt((center+arrOfNumbers.length)/2)
        }else{
            center = parseInt((center)/2)
        }
    }
    return `the number ${numToLook} not exist`
}
let arrayTest = [ 6 , 10 , 25 ,40, 50 , 100 , 200]
console.log(binarySearch(arrayTest,6))
// console.log(binarySearch(arrayTest,10))
// console.log(binarySearch(arrayTest,25))
// console.log(binarySearch(arrayTest,40))
// console.log(binarySearch(arrayTest,50))
// console.log(binarySearch(arrayTest,100))
// console.log(binarySearch(arrayTest,200))

//Selection Sort : Develop a sorting algorithm by strategically selecting and arranging elements.
 function selectionSort(arr){
    let minValue = arr[0]
    let sortedRegion = 0
    for (let i = sortedRegion; i < arr.length;i) {
        for (let j = 0; j < arr.length; y++) {
            if (arr[i]<minValue) {
                minValue = arr[i]
            }
        }
    }
 }