const express = require('express');
const jwt = require('jsonwebtoken');
// Import validation and sanitization functions
const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.json());

// In a real app, this would be a database.
const users = [
  { id: 1, username: 'alice', password: 'secret_password' },
  { id: 2, username: 'bob', password: 'password122' },
];

// In a real app, use an environment variable for the secret key!
const JWT_SECRET = 'your_super_secret_key_that_is_long_and_random';

// Middleware chain for login validation and sanitization
const loginValidationRules = [
  // Sanitize username: trim whitespace and escape HTML characters to prevent XSS.
  body('username')
    .notEmpty().withMessage('Username is required.')
    .trim()
    .escape(),
  // Validate password: ensure it is not empty.
  body('password')
    .notEmpty().withMessage('Password is required.'),
];

app.post('/login', loginValidationRules, (req, res) => {
  // 1. Handle validation errors from the middleware.
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If there are errors, respond with a 400 status and the error messages.
    return res.status(400).json({ errors: errors.array() });
  }

  // The input is now validated and sanitized.
  const { username, password } = req.body;
  
  // Find the user (in a real app, you'd check a hashed password).
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // 2. JWT Token Payload Sanitization is implicitly done.
    // We use the 'username' from req.body, which was already sanitized by the middleware.
    const payload = { 
      user: {
        id: user.id,
        username: username, // Using the sanitized username
      }
    };
    
    // Generate the token
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

    res.status(200).json({ 
      message: 'Authentication successful',
      token: token 
    });
  } else {
    res.status(401).json({ message: 'Authentication failed. Invalid credentials.' });
  }
});


// Middleware to verify the token (ensureToken from the original example)
function ensureToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.get('/protected', ensureToken, (req, res) => {
  jwt.verify(req.token, JWT_SECRET, (err, authData) => {
    if (err) {
      res.status(403).json({ message: 'Token is not valid' });
    } else {
      res.json({
        message: 'Access granted to protected route',
        data: authData
      });
    }
  });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});