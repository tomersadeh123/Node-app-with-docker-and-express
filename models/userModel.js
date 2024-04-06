const mongoose = require("mongoose"); // Importing mongoose

// Defining the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "User must have a username"], // Field is required, and error message if not provided
        unique: true, // Username must be unique
    },
    password: {
        type: String,
        required: [true, "User must have a password"], // Field is required, and error message if not provided
    },
});

// Creating the User model based on the user schema
const User = mongoose.model("User", userSchema);

module.exports = User; // Exporting the User model
