// eventManager.js
const EventEmitter = require('events');

// Create a single instance to be shared across the application
const atmEmitter = new EventEmitter();

module.exports = atmEmitter;