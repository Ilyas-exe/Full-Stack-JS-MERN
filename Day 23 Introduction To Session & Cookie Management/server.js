const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// 1. SETUP: Configure session middleware
app.use(session({
  // A secret is used to sign the session ID cookie.
  secret: 'a_very_long_and_secret_string_for_production',
  // resave: false forces the session to be saved back to the session store,
  // even if the session was never modified during the request.
  resave: false,
  // saveUninitialized: true forces a session that is "uninitialized" to be saved to the store.
  // A session is uninitialized when it is new but not modified.
  saveUninitialized: false,
  cookie: { 
    secure: false, // In production, set this to true to only allow cookies over HTTPS
    httpOnly: true, // Prevents client-side JS from reading the cookie
    maxAge: 1000 * 60 * 60 // Cookie expiration time (e.g., 1 hour)
  }
}));

// Server variable to act as a simple user database
const users = [];

// --- ROUTES ---

// 2. REQUIREMENT: Registration Endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }

  // Check if user already exists
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(409).send('Username already taken.');
  }

  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Store the new user
  users.push({ username, password: hashedPassword });
  console.log('Users:', users); // For debugging
  
  res.status(201).send('User registered successfully.');
});

// 3. REQUIREMENT: Login Endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }

  // Find the user
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).send('Invalid credentials.');
  }

  // Compare submitted password with the stored hash
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send('Invalid credentials.');
  }
  
  // SUCCESS: Create a session for the user
  // The session middleware will automatically send a session cookie to the client.
  req.session.user = { username: user.username };
  
  res.status(200).send('Logged in successfully.');
});

// 4. REQUIREMENT: Protected Route
// We need a middleware to check for authentication
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    // If a user is found on the session object, they are authenticated.
    return next();
  } else {
    // If not, they are not authorized.
    return res.status(401).send('You must be logged in to view this page.');
  }
};

// Apply the middleware to this route
app.get('/profile', isAuthenticated, (req, res) => {
  // The user object is available from the session
  res.send(`Welcome to your profile, ${req.session.user.username}!`);
});

// 5. REQUIREMENT: Logout Functionality
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Could not log out.');
    }
    // The `express-session` middleware will handle clearing the cookie
    res.status(200).send('Logged out successfully.');
  });
});

// --- SERVER START ---

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});