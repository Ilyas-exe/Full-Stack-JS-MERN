// userManager.js
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, 'users.json');

// Helper function to read users from the JSON file
const readUsers = () => {
    try {
        if (!fs.existsSync(usersFilePath)) {
            fs.writeFileSync(usersFilePath, '[]', 'utf8');
        }
        const data = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading users file:", error);
        return [];
    }
};

// Helper function to write users to the JSON file
const writeUsers = (users) => {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
    } catch (error) {
        console.error("Error writing to users file:", error);
    }
};

// Function to add a new user
const addUser = (name, pin) => {
    if (!/^\d{4}$/.test(pin)) {
        console.error("Error: PIN must be exactly 4 digits.");
        return null;
    }
    const users = readUsers();
    const accountID = `ACC${Date.now()}`; // Generate a unique account ID

    const newUser = {
        accountID,
        name,
        pin,
        balance: 0,
        transactions: [],
    };

    users.push(newUser);
    writeUsers(users);
    console.log(`Account created successfully! Your new Account ID is: ${accountID}`);
    return newUser;
};

// Function to authenticate a user
const authenticateUser = (accountID, pin) => {
    const users = readUsers();
    const user = users.find(u => u.accountID === accountID && u.pin === pin);
    return user || null;
};

// Function to update a user's data (e.g., after a transaction)
const updateUser = (accountID, updatedData) => {
    const users = readUsers();
    const userIndex = users.findIndex(u => u.accountID === accountID);

    if (userIndex === -1) {
        console.error("User not found for update.");
        return;
    }

    users[userIndex] = { ...users[userIndex], ...updatedData };
    writeUsers(users);
};

module.exports = {
    addUser,
    authenticateUser,
    updateUser,
};