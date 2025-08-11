// atmOperations.js
const atmEmitter = require('./eventManager');
const { updateUser } = require('./userManager');

// Listener for checking balance
atmEmitter.on('checkBalance', (user) => {
    console.log(`\nYour current balance is: $${user.balance.toFixed(2)}`);
});

// Listener for viewing transaction history
atmEmitter.on('viewTransactions', (user) => {
    console.log("\n--- Transaction History ---");
    if (user.transactions.length === 0) {
        console.log("No transactions found.");
    } else {
        user.transactions.forEach(t => {
            console.log(`- Type: ${t.type}, Amount: $${t.amount.toFixed(2)}, Date: ${new Date(t.date).toLocaleString()}`);
        });
    }
    console.log("--------------------------");
});

// Listener for depositing money
atmEmitter.on('deposit', (user, amount) => {
    if (amount <= 0 || isNaN(amount)) {
        console.error("\nInvalid deposit amount. Please enter a positive number.");
        return;
    }

    user.balance += amount;
    const transaction = { type: 'deposit', amount, date: new Date().toISOString() };
    user.transactions.push(transaction);

    updateUser(user.accountID, { balance: user.balance, transactions: user.transactions });
    console.log(`\nSuccessfully deposited $${amount.toFixed(2)}. New balance: $${user.balance.toFixed(2)}`);
});

// Listener for withdrawing money
atmEmitter.on('withdraw', (user, amount) => {
    if (amount <= 0 || isNaN(amount)) {
        console.error("\nInvalid withdrawal amount. Please enter a positive number.");
        return;
    }
    if (amount > user.balance) {
        console.error("\nInsufficient funds. Your current balance is $${user.balance.toFixed(2)}");
        return;
    }

    user.balance -= amount;
    const transaction = { type: 'withdraw', amount, date: new Date().toISOString() };
    user.transactions.push(transaction);

    updateUser(user.accountID, { balance: user.balance, transactions: user.transactions });
    console.log(`\nSuccessfully withdrew $${amount.toFixed(2)}. New balance: $${user.balance.toFixed(2)}`);
});