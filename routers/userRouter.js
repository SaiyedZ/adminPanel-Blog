// routers/userRouter.js
const { Router } = require("express");
const UserController = require("../controllers/userController"); // Ensure this controller exists

const userRouter = Router();

userRouter.post("/user/create", UserController.createUser ); // Add this line

module.exports = userRouter;