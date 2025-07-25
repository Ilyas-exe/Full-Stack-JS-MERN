//Task 1 : Warm up !
let me = {
    firstname : 'Ilias',
    lastname : 'AitBelaid',
    age : 22,
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
}
// console.log(me.fullname)

// Task 2 : Are you Older Than me ?
class Person {
    constructor(name,age){
        this.name=name
        this.age=age
    }
    compareAge(theOtherPerson){
        switch (true) {
            case this.age > theOtherPerson.age:
                console.log(theOtherPerson.name,' is younger than me.')
                break;
            case this.age < theOtherPerson.age:
                console.log(theOtherPerson.name,' is older than me.')
                break;
        
            default:
                console.log(theOtherPerson.name,' is the same age as me.')
                break;
        }
    }
}
// let p1 = new Person("Samuel", 24)
// let p2 = new Person("Joel", 36)
// let p3 = new Person("Lily", 24)

// p1.compareAge(p2)
// p2.compareAge(p1)
// p1.compareAge(p3)

//Task 3 : Most Occurred
function mostOccurred(arr){
    
    let largeCounter = 0
    let currentCounter = 0
    let mostOccurredNum = 0

    for (let i = 0; i < arr.length; i++) {
        currentCounter=0
        for (let j = 0; j < arr.length; j++) {
            if(i != j){
                if (arr[i]==arr[j]) {
                 currentCounter++
                }
            }    
            if (currentCounter>largeCounter) {
                largeCounter=currentCounter
                mostOccurredNum = arr[i]
            }
        }
    }
    return mostOccurredNum
}

console.log(mostOccurred([4, 2, 2, 7, 2]))