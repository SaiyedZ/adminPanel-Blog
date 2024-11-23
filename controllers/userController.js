// controllers/userController.js
const User = require("../models/userSchema"); // Ensure you have a User model defined

module.exports.createUser  = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;
        // Add validation and user creation logic here
        const newUser  = await User.create({ username, email, password, phone });
        return res.status(201).redirect("/login"); // Redirect or send a response
    } catch (error) {
        console.error(error);
        return res.status(500).redirect("/signup"); // Handle errors
    }
};