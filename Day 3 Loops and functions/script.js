// // Task 1 : Factorial
function factoriel(n){
    let f = n;
    for (let i = 1; i < n; ++i) {
    f *= n-i
    }
    return f
}
// console.log(factoriel(7))
// Task 2 : How many digits ?
function nDigits(number) {
    var count = 0;
    while (number >= 1) {
        let nume = number / 10
        count++
        number = nume
    }
    console.log(count)

}
// nDigits(123456789)
// Task 3 : Time to draw !
function TTD() { 
let y = 3
for (let i = 1; i < 8; i+=2) {
    console.log(' '.repeat(y)+'*'.repeat(i)+' '.repeat(y))
    --y
}
console.log(' '.repeat(3)+'|'+' '.repeat(3)) 
}
TTD()

// Task 2 : The Extended Factorial
function combinator(n,p) {
    return(factoriel(n)/(factoriel(p)*factoriel(n-p)))
}

// console.log(combinator(5,2))

// Task 3 :  The Calculator

function calculator(n1,o,n2){
    switch (o) {
        case '+':
            console.log(n1+n2)
            break;
        case '-':
            console.log(n1-n2)
            break;
        case '*':
            console.log(n1*n2)
            break;
        case '/':
            console.log(n1/n2)
            break;
        case '%':
            console.log(n1%n2)
            break;
        case 'c':
            console.log(combinator(n1,n2))
            break;
    
        default:
            console.log('Please in the second parametre enter one of this symboles "+" "-" "*" "/" "%" "c"')
            break;
    }
}
calculator(5,'c',2)