const readline = require('readline');
let contacts = [
    { name: 'ilyass', phoneNumber: '000' },
    { name: 'anas', phoneNumber: '001' },
    { name: 'ali', phoneNumber: '002' },
    { name: 'mohamed', phoneNumber: '003' },
    { name: 'younes', phoneNumber: '004' }
]
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function addContact() {
    rl.question('what is your name ? ', (name) => {
        rl.question('what is your phone number ? ', (phoneNumber) => {
            console.log('Hello ', name)
            contacts.push({ name: name, phoneNumber: phoneNumber })
            console.log('Contact added!');
            console.log(contacts);
            rl.close()
        })
    })
}
// addContact()


function allContacts() {
    console.log(contacts.map(person => {
        console.log(`Name = ${person.name} - Phone Number = ${person.phoneNumber}`)
    }))
}
// allContacts()

function findContact() {
    rl.question('what is the name you want to find ? ', (n) => {
        const theContact = contacts
            .filter(contact => contact.name==n)
            

        console.log(theContact);
    })
}
findContact()