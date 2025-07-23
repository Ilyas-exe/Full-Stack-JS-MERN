// The Basics
// Task1 :  Warm up
let firstname = 'Ilias'
let lastname = 'AitBelaid'
const PI = 3.14
let radius = 5
let favoriteSuperhero = 'Joker'
let favoriteQuote = 'Why so serious?' 

// Task2 :  Speed run
let fullname = firstname + ' ' + lastname
let area = PI * radius * radius
let  perimeter = 2 * PI * radius
let motivation = `A wise man named ${favoriteSuperhero}: "${favoriteQuote}"`

// Task3 :  Variable swap
let a = 3
let b = 10

let switcher = b
b = a
a = switcher
console.log("After swapping: a = ", a, " and b = ", b);

// Conditional Statements
// Task1 : Even or Odd
let number = 4
number%2 == 0 ? console.log('even') : console.log('odd')

// Task2 :  Days of the week
var day = 4
switch (day) {
    case 1:
    console.log('Monday')
    break;
    case 2:
    console.log('Tuesday')
    break;
    case 3:
    console.log('Wednsday')
    break;
    case 4:
    console.log('Thursday')
    break;
    case 5:
    console.log('Friday')
    break;
    case 6:
    console.log('Saturday')
    break;
    case 7:
    console.log('Sunday')
    break;

    default:
    console.log('Unvalid Day')
    break;
}

// Task3 : Maximum 
let n1 = -15;
let n2 = 6;
let n3 = 2.6;

let max = n1

max < n2 && (max = n2)
max < n3 && (max = n3)
console.log('the big number is : '+max)

//Task4 : The Teacher
let score = 70

switch (true) {
    case score <= 15:
        console.log('grade is F')
        break;
    case score <= 40:
        console.log('grade is E')
        break;
    case score <= 55:
        console.log('grade is D')
        break;
    case score <= 70:
        console.log('grade is C')
        break;
    case score <= 85:
        console.log('grade is B')
        break;
    case score > 85:
        console.log('grade is A')
        break;
    default:
        console.log('undefined Number')
        break;
}

if (score <= 15) {
    console.log('grade is F')
} else if(score <= 40) {
    console.log('grade is E')
}
else if(score <= 55) {
    console.log('grade is D')
}
 else if(score <= 70) {
    console.log('grade is C')
}
 else if(score <= 85) {
    console.log('grade is B')
}
 else if(score > 85) {
    console.log('grade is A')
}
 else {
    console.log('undefined Number')
}

