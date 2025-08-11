// app.js
const readline = require('readline');
const atmEmitter = require('./eventManager');
const { addUser, authenticateUser } = require('./userManager');
require('./atmOperations'); // This line registers the event listeners

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));

// Main menu for an authenticated user
const loggedInMenu = async (user) => {
    while (true) {
        console.log("\n--- ATM Menu ---");
        console.log("1. Check Balance");
        console.log("2. Deposit Money");
        console.log("3. Withdraw Money");
        console.log("4. View Transaction History");
        console.log("5. Logout");

        const choice = await askQuestion("Choose an option: ");

        switch (choice) {
            case '1':
                atmEmitter.emit('checkBalance', user);
                break;
            case '2':
                const depositAmount = parseFloat(await askQuestion("Enter amount to deposit: "));
                atmEmitter.emit('deposit', user, depositAmount);
                break;
            case '3':
                const withdrawAmount = parseFloat(await askQuestion("Enter amount to withdraw: "));
                atmEmitter.emit('withdraw', user, withdrawAmount);
                break;
            case '4':
                atmEmitter.emit('viewTransactions', user);
                break;
            case '5':
                console.log("\nLogging out. Goodbye!");
                return; // Exit the loop and return to the main menu
            default:
                console.log("\nInvalid option. Please try again.");
        }
    }
};

// Initial welcome screen and main loop
const main = async () => {
    console.log("Welcome to the ATM Management System!");
    while (true) {
        console.log("\n--- Main Menu ---");
        console.log("1. Login");
        console.log("2. Create New Account");
        console.log("3. Exit");

        const choice = await askQuestion("Choose an option: ");

        switch (choice) {
            case '1':
                const accountID = await askQuestion("Enter Account ID: ");
                const pin = await askQuestion("Enter PIN: ");
                const user = authenticateUser(accountID, pin);
                if (user) {
                    console.log(`\nWelcome, ${user.name}!`);
                    await loggedInMenu(user);
                } else {
                    console.error("\nAuthentication failed. Invalid Account ID or PIN.");
                }
                break;
            case '2':
                const name = await askQuestion("Enter your full name: ");
                const newPin = await askQuestion("Enter a 4-digit PIN: ");
                addUser(name, newPin);
                break;
            case '3':
                console.log("\nThank you for using the ATM. Goodbye!");
                rl.close();
                return;
            default:
                console.log("\nInvalid option. Please choose 1, 2, or 3.");
        }
    }
};

main();