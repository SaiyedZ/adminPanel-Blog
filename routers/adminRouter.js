const { Router } = require("express");
const adminCtl = require('../controllers/adminController');
const { uploadImage } = require("../middleware/adminMiddleware");

const adminRouter = Router();

adminRouter.post('/add_admin', uploadImage, adminCtl.addAdminData);
adminRouter.get('/delete-admin/:adminId', adminCtl.deleteAdmin);
adminRouter.post('/edit_admin/:adminId', uploadImage, adminCtl.editAdmin);

module.exports = adminRouter;