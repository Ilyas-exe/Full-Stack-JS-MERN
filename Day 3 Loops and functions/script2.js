function fizzBuzz(number){
    switch(true){
        case number%3==0 && number%5==0:
            console.log('FizzBuzz')
            break
        case number%3==0 :
            console.log('Fizz')
            break
        case number%5==0 :
            console.log('Buzz')
            break
        default :
            console.log(number)
    }
}
// fizzBuzz(10)


function printTriangle(star){
    let y = (star/2)-1
    for (let i = 1; i <= star; i+=2) {
        console.log(" ".repeat(y)+"#".repeat(i))
        --y
    }
}

printTriangle(10)

function countVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelsNumbers=0;
    for(i=0;i<word.length;++i){
        for(y=0;y<vowels.length;++y){
            word[i]==vowels[y] && ++vowelsNumbers
        }
    }
    console.log(vowelsNumbers)
}

// countVowels('ilias')

function findMax(arr){
    let maxvalue=0
    for (let i = 0; i < arr.length; i++) {
        maxvalue < arr[i] && (maxvalue = arr[i])
    }
    console.log(`the big number is this array [${arr}] is ${maxvalue}`)
}

// findMax([7,8,9,11,30,2])

function filterLongWords(arr){
    let longWords = []
    for (let i = 0; i < arr.length; ++i) {
        arr[i].length > 5 && longWords.push(arr[i])
    }
    console.log(`[${arr}] -> [${longWords}]`)
}
// filterLongWords(["apple", "banana", "carrot", "dog"])
