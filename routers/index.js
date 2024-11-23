const { Router } = require("express")
const apRouter = require("./apRouter")
const adminRouter = require("./adminRouter")
const blogRouter = require('./blogRouter')
const userRouter = require("./userRouter"); // Import the user router


const router = Router()

router.use('/',apRouter)
router.use('/', adminRouter)
router.use('/blog', blogRouter)
router.use("/", userRouter); // Use the user router

module.exports = router